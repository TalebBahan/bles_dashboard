import React from 'react'

export default function Unauthorized() {
    return (
        <div className="flex justify-center items-center h-screen flex-row">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#111827"
          width="30"
          height="30"
          viewBox="0 0 20 20"
   
        >
                <g id="Layer_1" data-name="Layer 1">
                    <path d="M9.163,12.3918h1.64314V10.79252H9.163Zm2.89157-8.16345h.00257a3.64063,3.64063,0,0,0-2.20628-.63842A3.0661,3.0661,0,0,0,8.14857,4.038a2.76558,2.76558,0,0,0-1.16871,2.3892H8.677a1.769,1.769,0,0,1,.28286-.94532A1.04288,1.04288,0,0,1,9.92414,5.026a1.08827,1.08827,0,0,1,.95143.36907,1.39636,1.39636,0,0,1,.261.81971,1.2034,1.2034,0,0,1-.234.71482,1.50543,1.50543,0,0,1-.34071.34835l-.42686.338a2.43473,2.43473,0,0,0-.78429.878,4.71574,4.71574,0,0,0-.18642,1.37913h1.59042a2.70559,2.70559,0,0,1,.07586-.69669,1.28421,1.28421,0,0,1,.45129-.62158l.41528-.32374a4.41652,4.41652,0,0,0,.855-.81583,2.161,2.161,0,0,0,.38057-1.295A2.18788,2.18788,0,0,0,12.05457,4.22835ZM19,15.2446V1H1V15.2446H9v1.42317H5V19H15V16.66777H11V15.2446ZM2.8,13.43036H17.19871V2.813H2.8Z" fill-rule="evenodd" />
                </g>
            </svg>
            <div>Unauthorized</div>
        </div>
    )
}