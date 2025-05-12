import axios from "axios";

export async function getSponsors() {
  try {
    const [a, b, c, d ] = await Promise.all([
      axios.get("https://api.congreso.v1.franco.in.net/api/logos?categoryId=1"),
      axios.get("https://api.congreso.v1.franco.in.net/api/logos?categoryId=2"),
      axios.get("https://api.congreso.v1.franco.in.net/api/logos?categoryId=3"),
      axios.get("https://api.congreso.v1.franco.in.net/api/logos?categoryId=4"),

    ]);

    return {
      category1: a.data,
      category2: b.data,
      category3: c.data,
      category4: d.data,
    };
  } catch (error) {
    console.error("Error fetching sponsors", error);
    return null;
  }
}
