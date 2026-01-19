import { ToolCase } from "lucide-react";
import React from "react";

/**
 * Tools Component
 * Displays a collection of software and framework icons used in the development workflow.
 * Features:
 * - Responsive flex layout
 * - Dark mode compatibility
 * - Interactive hover effects on icons
 */
const Tools = () => {
  return (
    <div className=" bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Section Header */}
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
            Tools I Use
          </h2>
          <div className="h-1.5 w-20 bg-emerald-600 mx-auto rounded-full" />
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-4">
            My essential stack for development and design
          </p>
        </div>

        {/* Tools Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 p-8 rounded-[3rem] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800">
          
          {/* Visual Studio Code Icon */}
          <div className="group relative cursor-pointer transition-transform hover:scale-110 active:scale-95">
            <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="relative z-10">
              <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path>
              <path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path>
              <path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
            </svg>
          </div>

          {/* Canva Icon */}
          <div className="group relative cursor-pointer transition-transform hover:scale-110 active:scale-95">
            <div className="absolute -inset-4 bg-teal-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="relative z-10">
              <linearGradient id="canva-gradient" x1="38.263" x2="10.15" y1="39.73" y2="8.725" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#823af3"></stop>
                <stop offset=".36" stopColor="#4b66e1"></stop>
                <stop offset=".906" stopColor="#01f1c4"></stop>
              </linearGradient>
              <path fill="url(#canva-gradient)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24 S12.955,4,24,4S44,12.955,44,24z"></path>
              <path fill="#fff" d="M29.194,26.962c-0.835,0.915-2.007,1.378-2.556,1.378 c-0.635,0-0.982-0.389-1.053-0.974c-0.024-0.224-0.016-0.45,0.024-0.673c0.21-1.31,0.692-2.124,0.662-2.372 c-0.009-0.071-0.049-0.106-0.101-0.106c-0.406,0-1.83,1.47-2.046,2.443l-0.168,0.779c-0.11,0.549-0.648,0.902-1.018,0.902 c-0.177,0-0.311-0.088-0.334-0.283c-0.007-0.089,0-0.178,0.021-0.266l0.079-0.41c-0.768,0.574-1.596,0.962-1.984,0.962 c-0.53,0-0.827-0.283-0.933-0.709c-0.35,0.461-0.813,0.709-1.306,0.709c-0.63,0-1.237-0.417-1.528-1.034 c-0.415,0.466-0.907,0.922-1.496,1.299c-0.869,0.55-1.836,0.992-2.982,0.992c-1.058,0-1.956-0.566-2.453-1.026 c-0.737-0.69-1.126-1.718-1.241-2.656c-0.362-2.957,1.438-6.834,4.227-8.533c0.64-0.39,1.357-0.584,2.008-0.584 c1.34,0,2.34,0.958,2.48,2.104c0.126,1.032-0.286,1.924-1.431,2.501c-0.584,0.296-0.874,0.282-0.965,0.141 c-0.061-0.094-0.026-0.254,0.091-0.351c1.076-0.899,1.096-1.637,0.97-2.677c-0.082-0.669-0.522-1.098-1.016-1.098 c-2.115,0-5.149,4.745-4.727,8.197c0.165,1.346,0.99,2.904,2.682,2.904c0.564,0,1.162-0.159,1.694-0.425 c0.928-0.474,1.453-0.85,1.98-1.464c-0.13-1.596,1.24-3.6,3.278-3.6c0.882,0,1.612,0.354,1.698,1.062 c0.108,0.885-0.646,1.062-0.928,1.062c-0.247,0-0.643-0.071-0.671-0.301c-0.03-0.248,0.534-0.106,0.464-0.673 c-0.043-0.354-0.411-0.478-0.763-0.478c-1.269,0-1.97,1.77-1.835,2.869c0.061,0.496,0.315,0.991,0.774,0.991 c0.37,0,0.904-0.531,1.109-1.31c0.13-0.531,0.632-0.885,1.003-0.885c0.194,0,0.328,0.088,0.352,0.283 c0.008,0.071,0.002,0.16-0.021,0.266c-0.042,0.23-0.219,0.996-0.21,1.154c0.006,0.138,0.086,0.328,0.326,0.328 c0.19,0,0.89-0.378,1.538-0.958c0.203-1.051,0.454-2.351,0.474-2.454c0.079-0.426,0.232-0.865,1.096-0.865 c0.177,0,0.311,0.088,0.337,0.301c0.008,0.07,0.002,0.16-0.021,0.266l-0.242,1.093c0.758-1.01,1.936-1.752,2.642-1.752 c0.3,0,0.531,0.158,0.57,0.478c0.022,0.178-0.03,0.478-0.147,0.814c-0.251,0.69-0.533,1.727-0.72,2.62 c-0.04,0.19,0.026,0.476,0.373,0.476c0.277,0,1.166-0.339,1.885-1.288c-0.005-0.134-0.007-0.27-0.007-0.408 c0-0.744,0.053-1.346,0.194-1.787c0.141-0.461,0.723-0.902,1.11-0.902c0.194,0,0.335,0.106,0.335,0.318 c0,0.071-0.018,0.16-0.053,0.248c-0.264,0.779-0.405,1.506-0.405,2.231c0,0.407,0.088,1.062,0.177,1.398 c0.018,0.071,0.034,0.142,0.105,0.142c0.123,0,0.952-0.814,1.551-1.806c-0.53-0.337-0.829-0.956-0.829-1.718 c0-1.274,0.758-1.93,1.498-1.93c0.582,0,1.11,0.425,1.11,1.274c0,0.532-0.212,1.134-0.51,1.718c0,0,0.123,0.018,0.176,0.018 c0.458,0,0.811-0.213,1.006-0.443c0.088-0.1,0.17-0.178,0.248-0.224c0.59-0.713,1.455-1.228,2.47-1.228 c0.864,0,1.61,0.337,1.696,1.045c0.11,0.902-0.661,1.08-0.926,1.08c-0.264,0-0.661-0.071-0.689-0.301s0.551-0.106,0.484-0.654 c-0.043-0.354-0.413-0.496-0.766-0.496c-1.182,0-1.994,1.576-1.838,2.85c0.062,0.514,0.299,1.01,0.758,1.01 c0.37,0,0.923-0.532,1.127-1.31c0.131-0.514,0.632-0.885,1.002-0.885c0.176,0,0.328,0.088,0.354,0.301 c0.013,0.106-0.03,0.337-0.227,1.168c-0.081,0.354-0.097,0.655-0.066,0.903c0.063,0.514,0.298,0.85,0.516,1.045 c0.079,0.07,0.126,0.158,0.132,0.213c0.017,0.142-0.091,0.266-0.267,0.266c-0.053,0-0.123,0-0.181-0.035 c-0.908-0.372-1.285-0.991-1.391-1.576c-0.35,0.442-0.814,0.69-1.29,0.69c-0.811,0-1.603-0.709-1.715-1.629 c-0.046-0.378-0.001-0.785,0.123-1.184c-0.329,0.203-0.683,0.316-1.001,0.316c-0.106,0-0.194,0-0.299-0.018 c-0.793,1.15-1.622,1.947-2.257,2.302c-0.264,0.142-0.51,0.213-0.687,0.213c-0.142,0-0.3-0.035-0.37-0.159 C29.367,27.91,29.258,27.474,29.194,26.962z"></path>
              <path fill="#fff" d="M32.067,23.191c0,0.496,0.246,1.01,0.564,1.346 c0.124-0.337,0.194-0.673,0.194-1.01c0-0.638-0.247-0.921-0.441-0.921C32.155,22.606,32.067,22.926,32.067,23.191z"></path>
            </svg>
          </div>

          {/* Adobe Photoshop Icon */}
          <div className="group relative cursor-pointer transition-transform hover:scale-110 active:scale-95">
            <div className="absolute -inset-4 bg-sky-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="relative z-10">
              <path fill="#03A9F4" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"></path>
              <path fill="#020F16" d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z"></path>
              <path fill="#020F16" d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.503-1.123-0.503-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113-0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z"></path>
            </svg>
          </div>

          {/* Figma Icon */}
          <div className="group relative cursor-pointer transition-transform hover:scale-110 active:scale-95">
            <div className="absolute -inset-4 bg-orange-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className="relative z-10">
              <linearGradient id="figma-g1" x1="16.309" x2="23.023" y1="1.101" y2="19.546" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f44f5a"></stop><stop offset=".443" stopColor="#ee3d4a"></stop><stop offset="1" stopColor="#e52030"></stop></linearGradient>
              <path fill="url(#figma-g1)" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path>
              <linearGradient id="figma-g2" x1="15.64" x2="22.314" y1="14.636" y2="32.971" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ae4cd5"></stop><stop offset="1" stopColor="#9331bf"></stop></linearGradient>
              <path fill="url(#figma-g2)" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path>
              <linearGradient id="figma-g3" x1="14.81" x2="21.821" y1="26.357" y2="45.617" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#33c481"></stop><stop offset="1" stopColor="#21a366"></stop></linearGradient>
              <path fill="url(#figma-g3)" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path>
              <linearGradient id="figma-g4" x1="27.498" x2="34.119" y1=".512" y2="18.702" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f09ca2"></stop><stop offset="1" stopColor="#eb6773"></stop></linearGradient>
              <path fill="url(#figma-g4)" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path>
              <linearGradient id="figma-g5" x1="28.714" x2="34.857" y1="14.972" y2="31.85" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#32bdef"></stop><stop offset="1" stopColor="#1ea2e4"></stop></linearGradient>
              <circle cx="32" cy="24" r="7" fill="url(#figma-g5)"></circle>
            </svg>
          </div>

          {/* Django Icon */}
          <div className="group relative cursor-pointer transition-transform hover:scale-110 active:scale-95">
            <div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" className="relative z-10">
              <path fill="#023d24ff" d="M11,3v5.1582c-0.347,-0.141 -1.09584,-0.1582 -1.46484,-0.1582c-2.776,0 -5.3457,1.306 -5.3457,5c0,4.42 3.48055,5 5.81055,5c0.92,0 3,-0.09086 4,-0.38086v-14.61914zM16,3v3h3v-3zM16,8v8.70117c0,1.516 -0.922,3.094 -3,4l2.85938,1.29492c2.906,-1 3.14063,-4.29492 3.14063,-5.29492v-8.70117zM9.9707,10.55078c0.32,0 0.6793,0.05867 1.0293,0.13867v4.70313c-0.35,0.08 -0.7093,0.14063 -1.0293,0.14063c-1.31,0 -2.58008,-0.4132 -2.58008,-2.5332c0,-2.12 1.27008,-2.44922 2.58008,-2.44922z"></path>
            </svg>
          </div>

          {/* React Icon */}
          <div className="group relative cursor-pointer transition-transform hover:scale-110 active:scale-95">
            <div className="absolute -inset-4 bg-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" className="relative z-10">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#1064d1 opacity-20"></path>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#1064d1"></path>
              <path d="M12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" fill="#4e7ab5"></path>
            </svg>
          </div>

        </div>

        {/* Action Label */}
         <div className="pt-12 animate-in fade-in duration-1000">
                  <hr className="border-slate-200 dark:border-slate-800" />
                  <div className="flex justify-center -mt-4">
                     <div className="px-6 bg-slate-50 dark:bg-slate-950 flex gap-4 text-slate-300 dark:text-slate-700">
                        <ToolCase className="size-6" />
                        
                     </div>
                  </div>
                </div>
       

      </div>
    </div>
  );
};

export default Tools;