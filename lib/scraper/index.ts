import axios from "axios";
import * as cheerio from "cheerio";
import { extractCurrency, extractPrice } from "../utils";

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  // Bright Data Proxy Configuration

  // brd.superproxy.io:22225

  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port: port,
    rejectUnauthorized: false,
  };

  try {
    // Fetch product page
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);

    // SCRAPER FILE !!!!!
    const title = $("#productTitle").text().trim();
    const currentPrice = extractPrice(
      $(".priceToPay span.a-offscreen:first"),
      $("a.size.base.a-color-price:first"),
      $(".a-button-selected .a-color-base:first"),
      $(".a-price.a-text-price:first")
    );

    const originalPrice = extractPrice(
      $("#priceblock_ourprice:first"),
      $(".a-price.a-text-price .a-offscreen:first"),
      $("#listPrice:first"),
      $("#priceblock_dealprice:first"),
      $(".a-size-base.a-color-price:first")
    );

    const outOfStock =
      $("#availability span").text().trim().toLowerCase() ===
      "currently unavailable";

    const images =
      $("#imgBlkFront").attr("data-a-dynamic-image") ||
      $("#landingImage").attr("data-a-dynamic-image") ||
      "{}";

    const imageUrls = Object.keys(JSON.parse(images));

    const currency = extractCurrency($(".a-price-symbol"));
    const discountRate = $(".savingsPercentage:first")
      .text()
      .replace(/[-%]/g, "");

    // Data Object Amazon Information
    const data = {
      url,
      currency: currency || "€",
      image: imageUrls[0],
      title,
      currentPrice: currentPrice || originalPrice,
      originalPrice: Number(originalPrice) || Number(currentPrice),
      priceHistory: [],
      discountRate: Number(discountRate),
    };

    console.log(data);
  } catch (error: any) {
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
