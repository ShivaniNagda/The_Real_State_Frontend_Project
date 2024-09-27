import * as React from "react";
import './Locationn.css'

function Locationn() {
  return (
    <>
      <div className="loc">
        <div className="these-fields-are-mandatory-title-property-category-submit-property-action-category">
          These fields are mandatory: Title, Property Category Submit, Property
          Action Category
        </div>
        <div className="listing-location">Listing Location</div>
        <div className="address">*Address</div>
        <div className="loc2" />
        <div className="loc3">
          <div className="loc4">
            <div className="loc-column">
              <div className="loc5">
                <div className="country-state">Country / State</div>
                <div className="loc6" />
              </div>
            </div>
            <div className="loc-column-2">
              <div className="loc7">
                <div className="city">City</div>
                <div className="loc8" />
              </div>
            </div>
          </div>
        </div>
        <div className="embed-video-id">Embed Video id</div>
        <div className="loc9" />
        <div className="place-pin-with-property-address">
          Place Pin With Property Address
        </div>
        <div className="latitude-for-google-maps">
          Latitude (for Google Maps)
        </div>
        <div className="loc10" />
        <div className="google-column">
        <div className="google-street-view-camera-angle-value-from-0-to-360">
          Google Street View - Camera Angle (value from 0 to 360)
        </div>
        </div>
        <div className="loc11" />
        <div className="loc12">
          <div className="loc13" />
          <div className="enable-google-street-view">
            Enable Google Street View
          </div>
        </div>
        <div className="loc14">
          <div className="prev-step">Prev Step </div>
          <div className="next-step">Next Step </div>
        </div>
      </div>
      </>
  )
}
export default Locationn