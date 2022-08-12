import { i18next } from "../../translate/i18n";

export function SectionTestemonials() {
  return (
    <>
      <section id="testimonials" className="text-white">
        <h4 className="text-4xl pl-4 font-serif lg:text-center mb-9 mt-20">
          {i18next.t("sectionTest.appH4")}
        </h4>
      </section>
    </>
  );
}
