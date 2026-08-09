import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vivium — Partner With Us" },
      {
        name: "description",
        content:
          "Get in touch about school workshops, construction styling, hospitality supply, direct retail, or becoming an artisan or designer partner.",
      },
      { property: "og:title", content: "Contact Vivium" },
      {
        property: "og:description",
        content: "Tell us which part of the craft ecosystem you're coming from.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const interests = [
  "Schools",
  "Construction",
  "Hospitality",
  "Direct Retail",
  "Becoming an Artisan or Designer Partner",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-14 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="mt-5 text-4xl leading-[1.1] sm:text-5xl">Let's build something with craft in it.</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          Whether you run a school, a development, a hotel group, or a workshop of your
          own — tell us where you fit and we'll come back with a concrete first step.
        </p>
      </div>

      {submitted ? (
        <div className="self-start rounded-sm border border-border bg-card p-8">
          <h2 className="text-2xl">Thank you.</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Your message has been noted. We'll be in touch shortly.
          </p>
        </div>
      ) : (
        <form
          className="space-y-7"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <label htmlFor="name" className="eyebrow block">
              Name / Organisation
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-3 w-full rounded-sm border border-input bg-card px-4 py-3 text-base outline-none focus:border-ring"
            />
          </div>

          <fieldset>
            <legend className="eyebrow">I'm interested in</legend>
            <div className="mt-3 flex flex-wrap gap-3">
              {interests.map((interest) => (
                <label
                  key={interest}
                  className="cursor-pointer rounded-sm border border-border bg-card px-4 py-2 text-sm has-[:checked]:border-primary has-[:checked]:bg-secondary"
                >
                  <input type="radio" name="interest" value={interest} className="sr-only" required />
                  {interest}
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="message" className="eyebrow block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-3 w-full rounded-sm border border-input bg-card px-4 py-3 text-base outline-none focus:border-ring"
            />
          </div>

          <button
            type="submit"
            className="rounded-sm bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-clay"
          >
            Send message
          </button>

          <p className="text-xs leading-relaxed text-muted-foreground">
            Contact email, phone and address will be published here once confirmed.
          </p>
        </form>
      )}
    </section>
  );
}
