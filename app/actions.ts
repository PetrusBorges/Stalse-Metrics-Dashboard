"use server";

import { headers } from "next/headers";

export async function getCharts() {
  const headersList = await headers();
  const host = headersList.get("host");

  const response = await fetch(`http://${host}/api/charts`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch charts");
  }

  return await response.json();
}

export async function getCampaigns() {
  const headersList = await headers();
  const host = headersList.get("host");

  const response = await fetch(`http://${host}/api/campaigns`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch campaigns");
  }

  return await response.json();
}

export async function simulateError() {
  throw new Error("Successfully simulated error");
}
