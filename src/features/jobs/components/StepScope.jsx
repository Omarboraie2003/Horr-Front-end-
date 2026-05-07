/**
 * StepScope — Step 3
 * Props: jobData, patch, toggleExperience
 *
 * RadioCard and CheckboxCard live here — only used in this step.
 */

function RadioCard({ name, value, checked, onChange, title, description, compact = false }) {
  return (
    <label className={`pj-radio-card ${checked ? "selected" : ""} ${compact ? "compact" : ""}`}>
      <input type="radio" name={name} value={value} checked={checked} onChange={() => onChange(value)} />
      <div className="pj-radio-content">
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>
    </label>
  );
}

function CheckboxCard({ value, checked, onChange, title, description }) {
  return (
    <label className={`pj-radio-card ${checked ? "selected" : ""}`}>
      <input type="checkbox" value={value} checked={checked} onChange={() => onChange(value)} />
      <div className="pj-radio-content">
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>
    </label>
  );
}

export default function StepScope({ jobData, patch, toggleExperience }) {
  return (
    <>
      <p className="pj-step-indicator">Step 3 / 6 — Job Post</p>
      <h1 className="pj-step-title">Next, estimate the scope of your work.</h1>
      <p className="pj-step-desc">Consider the size of your project and the time it will take.</p>

      <div className="pj-form-card">

        {/* Complexity */}
        <div className="pj-group">
          <label className="pj-label">Project Complexity</label>
          <div className="pj-radio-group">
            {[
              { value: "large",  title: "Large",  description: "Longer term or complex initiatives (e.g. develop and execute a brand strategy)" },
              { value: "medium", title: "Medium", description: "Well-defined projects (e.g. design business rebrand package)" },
              { value: "small",  title: "Small",  description: "Quick and straightforward tasks (e.g. create logo)" },
            ].map((opt) => (
              <RadioCard
                key={opt.value}
                name="scopeSize"
                {...opt}
                checked={jobData.scopeSize === opt.value}
                onChange={(v) => patch({ scopeSize: v })}
              />
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className="pj-group">
          <label className="pj-label">How long will your work take?</label>
          <div className="pj-radio-group">
            {[
              { value: ">6m",  title: "More than 6 months" },
              { value: "3-6m", title: "3 to 6 months" },
              { value: "1-3m", title: "1 to 3 months" },
            ].map((opt) => (
              <RadioCard
                key={opt.value}
                name="duration"
                {...opt}
                compact
                checked={jobData.duration === opt.value}
                onChange={(v) => patch({ duration: v })}
              />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="pj-group">
          <label className="pj-label">What level of experience will it need?</label>
          <div className="pj-radio-group">
            {[
              { value: "entry",        title: "Entry",        description: "Looking for someone relatively new to this field" },
              { value: "intermediate", title: "Intermediate", description: "Looking for substantial experience in this field" },
              { value: "expert",       title: "Expert",       description: "Looking for comprehensive and deep expertise" },
              { value: "any",          title: "Any",          description: "Open to all experience levels" },
            ].map((opt) => (
              <CheckboxCard
                key={opt.value}
                {...opt}
                checked={jobData.experience.includes(opt.value)}
                onChange={toggleExperience}
              />
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
