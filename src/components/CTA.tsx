import Button from "./Button";
import clsx from "clsx";

export default function CTA() {
  return (
    <div className="bg-white overflow-hidden">
      <section
        className={clsx(
          "container py-10 px-[100px] rounded-t-[40px] bg-gray-900 flex md:flex-row flex-col items-center justify-between relative gap-y-6",
          "inverted-border max-w-[90%] md:max-w-full"
        )}
      >
        <h1 className="md:text-6xl text-2xl font-semibold text-white md:max-w-[60%] max-w-full text-center md:text-left">
          Let’s discuss and bring your vision to life.
        </h1>
        <Button withArrow variant="lg">
          <a href="mailto:wwicaksono96@gmail.com">Let&apos;s Talk</a>
        </Button>
      </section>
    </div>
  );
}
