import { ExternalLink } from "@/components/ExternalLink";
import { workSamples } from "@/lib/content";

export function WorkSamples() {
  return (
    <section
      className="section work-samples"
      id="samples"
      aria-labelledby="samples-title"
    >
      <p className="field">Work samples</p>
      <h2 id="samples-title">Measurement proof</h2>
      <p className="quiet section-copy">
        Public files on simulated data. The cash MER desk further down stays
        the live illustration.
      </p>
      <div className="sample-grid">
        {workSamples.map((item) => (
          <ExternalLink
            className="work-entry sample-card"
            href={item.href}
            key={item.href}
          >
            <p className="field">
              {item.kind}
              <span className="sim-tag">Demo on simulated data</span>
            </p>
            <h3>{item.title}</h3>
            <p>{item.line}</p>
            <ul className="skill-chips">
              {item.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <p className="more">Open the file</p>
          </ExternalLink>
        ))}
      </div>
    </section>
  );
}
