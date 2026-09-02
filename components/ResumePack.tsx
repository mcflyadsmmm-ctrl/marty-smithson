import { site } from "@/lib/site";

type ResumePackProps = {
  masterSolid?: boolean;
};

export function ResumePack({ masterSolid = true }: ResumePackProps) {
  return (
    <p className="actions">
      {site.resumes.map((item) => (
        <a
          key={item.key}
          className={masterSolid && item.key === "MASTER" ? "btn btn-solid" : "btn"}
          href={item.href}
          download={item.file}
        >
          {item.label}
        </a>
      ))}
    </p>
  );
}
