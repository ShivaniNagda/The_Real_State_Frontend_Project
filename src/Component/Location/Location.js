import * as React from "react";
import './Location.css'

function Location() {
  return (
    <>
      <div className="loc">
        <div className="these-fields-are-mandatory-title-property-category-submit-property-action-category">
          These fields are mandatory: Title, Property Category Submit, Property
          Action Category
        </div>
        <div className="listing-details">Listing Details</div>
        <div className="location2">
          <div className="location3">
            <div className="loc-column">
              <div className="location4">
                <div>Carpet Area in ft2 (*only numbers) </div>
                <div className="location5" />
                <div className="bedrooms-only-numbers">
                  Bedrooms(*only numbers){" "}
                </div>
              </div>
            </div>
            <div className="loc-column2">
              <div className="location6">
                <div>Rooms (*only numbers)</div>
                <div className="location7" />
                <div className="bathrooms-only-numbers">
                  Bathrooms (*only numbers)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location8">
          <div className="location9">
            <div className="column">
              <div className="location10">
                <div className="location11" />
                <div className="project-contact-no-numeric">
                  Project Contact No. (*numeric)
                </div>
                <div className="location12" />
                <div className="year-built-numeric">Year Built (*numeric)</div>
                <div className="location13" />
              </div>
            </div>
            <div className="loc-column3">
              <div className="location14">
                <div className="location15" />
                <div className="project-name-text">Project Name (*text)</div>
                <div className="location16" />
                <div className="rera-no-text">RERA No.(*text)</div>
                <div className="location17" />
                <div className="available-form-numeric">
                  Available Form (*numeric)
                </div>
                <div className="location18" />
                <div className="lot-size-numeric">Lot Size (*numeric)</div>
                <div className="location19" />
              </div>
            </div>
          </div>
        </div>
        <div className="location20">
          <div className="location21">
            <div className="column">
              <div className="location22">
                <div className="basement-numeric">Basement (*numeric)</div>
                <div className="location23" />
                <div className="parking-text">Parking (*text)</div>
                <div className="location24" />
              </div>
            </div>
            <div className="loc-column4">
              <div className="location25">
                <div className="living-hall-text">Living Hall (*text)</div>
                <div className="location26" />
                <div className="project-web-site-link-text">
                  Project Web site link (*text)
                </div>
                <div className="location27" />
              </div>
            </div>
          </div>
        </div>
        <div className="owner-agent-notes-not-visible-on-front-end">
          Owner/Agent notes (*not visible on front end)
        </div>
        <div className="location28" />
        <div className="location29">
          <div className="prev-step">Prev Step </div>
          <div className="next-step">Next Step </div>
        </div>
      </div>
      </>
  )
}
      export default Location