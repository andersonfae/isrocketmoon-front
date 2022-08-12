import { i18next } from "../../translate/i18n";

export function Sectionjob() {
  return (
    <>
      <section className="pl-4">
        <h3 className="text-xl text-white font-serif lg:text-center mb-9 mt-16">
          {i18next.t("sectionJob.appH3")}
        </h3>
        {/* <select className="bg-black text-white text-3xl pt-1.5 mb-9 border-b-2 border-indigo-500 lg:text-center margin-auto">
          <option value={"League of Legends"}>League of Legends</option>
          <option value={"Counter Strike"}>Counter Strike</option>
          <option value={"Tibia"}>Tibia</option>
          <option value={"Dota 2"}>Dota 2</option>
        </select> */}
      </section>
    </>
  );
}
