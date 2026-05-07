import { useRef } from "react";

/**
 * StepDescription — Step 5
 * Props: jobData, patch
 *
 * fileInputRef is local to this component — only used here.
 * TODO: on submit, send jobData.attachment via FormData multipart to BE.
 */
export default function StepDescription({ jobData, patch }) {
  const fileInputRef = useRef(null);

  return (
    <>
      <p className="pj-step-indicator">Step 5 / 6 — Job Post</p>
      <h1 className="pj-step-title">Start the conversation.</h1>

      <div className="pj-form-card">
        <div className="pj-desc-grid">

          {/* Tips */}
          <div className="pj-desc-tips">
            <h4>Talent are looking for:</h4>
            <ul>
              <li>Clear expectations about your task or deliverables</li>
              <li>The skills required for your work</li>
              <li>Good communication</li>
              <li>Details about how you or your team like to work</li>
            </ul>
          </div>

          {/* Input */}
          <div>
            <label className="pj-label" htmlFor="pj-desc">Describe what you need</label>
            <textarea
              id="pj-desc"
              className="pj-textarea"
              rows={10}
              placeholder="Already have a description? Paste it here!"
              value={jobData.description}
              onChange={(e) => patch({ description: e.target.value })}
            />

            {/* Hidden file input
                TODO: send jobData.attachment via FormData on submit */}
            <input
              ref={fileInputRef}
              type="file"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) patch({ attachment: file, attachmentName: file.name });
              }}
            />
            <button className="pj-attach-btn" onClick={() => fileInputRef.current?.click()}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
              Attach file
            </button>
            {jobData.attachmentName && (
              <p className="pj-filename">📎 {jobData.attachmentName}</p>
            )}
          </div>

        </div>
      </div>
    </>
  );
}
