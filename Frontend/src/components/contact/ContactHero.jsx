import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { formAnimation } from "../../animations/contact/formAnimation";
import { formSubmit } from "../../service/contactFormApi";
import { useToast } from "../../context/ToastContext";
import Toast from "../Toast";

function ContactHero() {
  const formRef = useRef(null);
  const [reason, setReason] = useState("general");
  const [formData, setFormData] = useState({});
  const { showToast, toast } = useToast();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      formAnimation(formRef.current);
    }, formRef);

    return () => ctx.revert();
  }, [reason]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      formSubmit({ ...formData, reason });
      showToast("Message sent successfully");
      setFormData({});
    } catch (err) {
      console.error(err);
      showToast("Failed to send");
    }
  };

  const renderForm = () => {
    switch (reason) {
      case "project":
        return (
          <div className="form-section">
            <h3>Project Details</h3>
            <div className="input-section">
              <label className="label" htmlFor="name">
                your name<span>*</span>
              </label>
              <input
                className="input"
                type="text"
                id="name"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="email">
                your email<span>*</span>
              </label>
              <input
                className="input"
                type="email"
                id="email"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="project-desc">
                Project Description<span>*</span>
              </label>
              <textarea
                className="input"
                value={formData.desc || ""}
                onChange={(e) =>
                  setFormData({ ...formData, desc: e.target.value })
                }
                id="project-desc"
              />
            </div>
          </div>
        );

      case "job":
        return (
          <div className="form-section">
            <h3>Job Opportunity</h3>
            <div className="input-section">
              <label className="label" htmlFor="name">
                Organisation Name<span>*</span>
              </label>
              <input
                className="input"
                type="text"
                id="name"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="email">
                Official Mail Id<span>*</span>
              </label>
              <input
                className="input"
                type="email"
                id="email"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="department">
                Department<span>*</span>
              </label>
              <input
                className="input"
                type="text"
                id="department"
                value={formData.department || ""}
                onChange={(e) =>
                  setFormData({ ...formData, department: e.target.value })
                }
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="budget">
                Budget
              </label>
              <input
                className="input"
                type="number"
                id="budget"
                value={formData.budget || ""}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="desc">
                Job Description<span>*</span>
              </label>
              <textarea
                className="input"
                id="desc"
                value={formData.desc || ""}
                onChange={(e) =>
                  setFormData({ ...formData, desc: e.target.value })
                }
                required
              />
            </div>
          </div>
        );

      case "general":
        return (
          <div className="form-section">
            <h3>General Inquiry</h3>
            <div className="input-section">
              <label className="label" htmlFor="email">
                Your Email<span>*</span>
              </label>
              <input
                className="input"
                type="email"
                id="email"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="subject">
                Subject<span>*</span>
              </label>
              <input
                className="input"
                type="text"
                id="subject"
                value={formData.subject || ""}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                required
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="message">
                Message<span>*</span>
              </label>
              <textarea
                className="input"
                id="message"
                value={formData.message || ""}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
          </div>
        );

      case "freelance":
        return (
          <div className="form-section">
            <h3>General Inquiry</h3>
            <div className="input-section">
              <label className="label" htmlFor="name">
                Your Name<span>*</span>
              </label>
              <input
                className="input"
                type="text"
                id="name"
                value={formData.name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="company-name">
                company name
              </label>
              <input
                className="input"
                type="text"
                id="company-name"
                value={formData.company_name || ""}
                onChange={(e) =>
                  setFormData({ ...formData, company_name: e.target.value })
                }
                required
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="email">
                Email Id<span>*</span>
              </label>
              <input
                className="input"
                type="email"
                id="email"
                value={formData.email || ""}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="budget">
                Budget
              </label>
              <input
                className="input"
                type="number"
                id="budget"
                value={formData.budget || ""}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
              />
            </div>
            <div className="input-section">
              <label className="label" htmlFor="desc">
                Describe your project/company<span>*</span>
              </label>
              <textarea
                className="input"
                id="desc"
                value={formData.desc || ""}
                onChange={(e) =>
                  setFormData({ ...formData, desc: e.target.value })
                }
                required
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="contact-page-container" ref={formRef}>
        {toast && <Toast />}
        <div className="contact-hero-section">
          <div className="reason-section">
            <label className="label">Reason of Contact</label>
            <select value={reason} onChange={(e) => setReason(e.target.value)}>
              <option value="general">General Inquiry</option>
              <option value="project">Project Collaboration </option>
              <option value="job">Job Opportunity</option>
              <option value="freelance">Freelance Projects</option>
            </select>
          </div>
        </div>
        <div className="contact-from-section">
          <form onSubmit={handleSubmit}>
            {renderForm()}

            <button type="submit" className="secondary-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactHero;
