"use client";
export default function Home() {
  return (
    <main>
      <button
        onClick={async () => {
          const apikey = process.env.NEXT_PUBLIC_API_KEY as string;

          const response = await fetch(
            "https://ai-dev-api.euron.live/blog_generation/blog/status",
            {
              headers: {
                "Api-Key": apikey,
              },
            }
          );

          const data = await response.json();

          console.log(data);
        }}
      >
        generate
      </button>
    </main>
  );
}
