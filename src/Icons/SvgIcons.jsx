import React from 'react';

export const Arrowright = (props) => {
  const { color = '#fff' } = props;

  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16.18 29.531'>
        <path
          d='M-5918,815.464l13.352,13.351L-5918,842.167'
          transform='translate(5919.414 -814.05)'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeWidth='2'
        />
      </svg>
    </>
  );
};

export const Search = (props) => {
  const { color = '#fff' } = props;

  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27.41 27.41'>
        <g transform='translate(-633.464 -141.464)'>
          <g
            transform='translate(633.464 141.464)'
            fill='none'
            stroke={color}
            strokeWidth='2'>
            <circle cx='11.5' cy='11.5' r='11.5' stroke='none' />
            <circle cx='11.5' cy='11.5' r='10.5' fill='none' />
          </g>
          <line
            x2='10'
            transform='translate(653.096 161.096) rotate(45)'
            fill='none'
            stroke={color}
            strokeWidth='2'
          />
        </g>
      </svg>
    </>
  );
};

export const CircleChecked = (props) => {
  const { color = '#fff' } = props;

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 0 24 24'
        width='24px'
        fill='#FFFFFF'>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' />
        <circle cx='12' cy='12' r='5' />
      </svg>
    </>
  );
};
export const CircleUnchecked = (props) => {
  const { color = '#fff' } = props;

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='15px'
        viewBox='0 0 24 24'
        width='15px'
        fill='#FFFFFF'>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' />
      </svg>
    </>
  );
};
export const Facebook = (props) => {
  const { color = '#fff' } = props;

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        enableBackground='new 0 0 24 24'
        height='24px'
        viewBox='0 0 24 24'
        width='24px'
        fill='#FFFFFF'>
        <rect fill='none' height='24' width='24' />
        <path d='M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z' />
      </svg>
    </>
  );
};

export const Twitter = (props) => {
  const { color = '#fff' } = props;

  return (
    <>
      <svg
        height='15pt'
        viewBox='0 0 512 512'
        width='15pt'
        fill='#fff'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm116.886719 199.601562c.113281 2.519532.167969 5.050782.167969 7.59375 0 77.644532-59.101563 167.179688-167.183594 167.183594h.003906-.003906c-33.183594 0-64.0625-9.726562-90.066406-26.394531 4.597656.542969 9.277343.8125 14.015624.8125 27.53125 0 52.867188-9.390625 72.980469-25.152344-25.722656-.476562-47.410156-17.464843-54.894531-40.8125 3.582031.6875 7.265625 1.0625 11.042969 1.0625 5.363281 0 10.558593-.722656 15.496093-2.070312-26.886718-5.382813-47.140624-29.144531-47.140624-57.597657 0-.265624 0-.503906.007812-.75 7.917969 4.402344 16.972656 7.050782 26.613281 7.347657-15.777343-10.527344-26.148437-28.523438-26.148437-48.910157 0-10.765624 2.910156-20.851562 7.957031-29.535156 28.976563 35.554688 72.28125 58.9375 121.117187 61.394532-1.007812-4.304688-1.527343-8.789063-1.527343-13.398438 0-32.4375 26.316406-58.753906 58.765625-58.753906 16.902344 0 32.167968 7.144531 42.890625 18.566406 13.386719-2.640625 25.957031-7.53125 37.3125-14.261719-4.394531 13.714844-13.707031 25.222657-25.839844 32.5 11.886719-1.421875 23.214844-4.574219 33.742187-9.253906-7.863281 11.785156-17.835937 22.136719-29.308593 30.429687zm0 0' />
      </svg>
    </>
  );
};

export const Google = (props) => {
  const { color = '#fff' } = props;

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        fill='#fff'
        shapeRendering='geometricPrecision'
        textRendering='geometricPrecision'
        imageRendering='optimizeQuality'
        fillRule='evenodd'
        clipRule='evenodd'
        viewBox='0 0 640 640'>
        <path d='M326.331 274.255v109.761h181.49c-7.37 47.115-54.886 138.002-181.49 138.002-109.242 0-198.369-90.485-198.369-202.006 0-111.509 89.127-201.995 198.369-201.995 62.127 0 103.761 26.516 127.525 49.359l86.883-83.635C484.99 31.512 412.741-.012 326.378-.012 149.494-.012 6.366 143.116 6.366 320c0 176.884 143.128 320.012 320.012 320.012 184.644 0 307.256-129.876 307.256-312.653 0-21-2.244-36.993-5.008-52.997l-302.248-.13-.047.024z' />
      </svg>
    </>
  );
};
export const Instagram = (props) => {
  const { color = '#fff' } = props;

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        fill='#fff'
        shapeRendering='geometricPrecision'
        textRendering='geometricPrecision'
        imageRendering='optimizeQuality'
        fillRule='evenodd'
        clipRule='evenodd'
        viewBox='0 0 640 640'>
        <path d='M184.715 2.752h270.582C556.908 2.752 640 84.816 640 185.069v269.85c0 100.277-83.092 182.317-184.703 182.317H184.715C83.104 637.236 0 555.196 0 454.919v-269.85C0 84.816 83.103 2.752 184.715 2.752zm133.561 145.939c98.741 0 178.868 80.127 178.868 178.868 0 98.753-80.127 178.868-178.868 178.868-98.765 0-178.88-80.115-178.88-178.868 0-98.741 80.115-178.868 178.88-178.868zm0 60.414c65.387 0 118.454 53.056 118.454 118.454s-53.068 118.466-118.454 118.466c-65.41 0-118.466-53.067-118.466-118.466 0-65.398 53.056-118.454 118.466-118.454zM491.321 123.9c16.04 0 29.044 13.004 29.044 29.032 0 16.04-13.004 29.044-29.044 29.044-16.028 0-29.032-13.004-29.032-29.044 0-16.028 13.004-29.032 29.032-29.032zM206.825 54.58H433.21c85.005 0 154.526 69.178 154.526 153.712V435.81c0 84.532-69.52 153.699-154.526 153.699H206.825c-85.005 0-154.537-69.167-154.537-153.7V208.29c0-84.532 69.532-153.71 154.537-153.71z' />
      </svg>
    </>
  );
};
export const Linkedin = (props) => {
  const { color = '#fff' } = props;

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='18'
        fill='#fff'
        shapeRendering='geometricPrecision'
        textRendering='geometricPrecision'
        imageRendering='optimizeQuality'
        fillRule='evenodd'
        clipRule='evenodd'
        viewBox='0 0 640 640'>
        <path d='M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z' />
      </svg>
    </>
  );
};
export const Github = (props) => {
  const { color = '#fff' } = props;

  return (
    <>
      <svg
        id='regular'
        enableBackground='new 0 0 24 24'
        height='24'
        viewBox='0 0 24 24'
        width='24'
        fill='#fff'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='m.184 10.462c-.779 4.906 1.401 10.823 8.123 13.006.12.022.231.032.335.032.782 0 1.32-.582 1.32-1.3-.097-.523.383-2.642-.92-2.357-2.519.536-2.821-.871-3.205-1.607 1.086 1.394 2.718 1.359 3.949.819.683-.3.326-1.064.65-1.343.496-.426.244-1.243-.407-1.314-2.314-.255-4.457-1.001-4.457-4.702 0-2.168 1.505-2.362 1.09-3.269-.015-.033-.333-.754-.045-1.849 1.419.262 2.072 1.28 2.753 1.097 1.687-.46 3.544-.46 5.23 0 .704.189 1.207-.801 2.738-1.103.441 1.654-.473 2.058.103 2.677.632.68.953 1.503.953 2.447 0 5.564-4.717 3.957-5.101 5.22-.088.288.005.599.235.792.61.513.53 1.83.465 2.889-.067 1.098-.125 2.045.482 2.579.214.19.595.393 1.284.253 6.634-2.131 8.83-8.022 8.063-12.917-2.096-13.368-21.526-13.352-23.638-.05zm8.27 10.978.004.505c-.523-.181-1.015-.39-1.475-.623.425.109.913.156 1.471.118zm.37-3.7c-.005.026-.01.053-.015.08-.853.252-1.509.001-1.957-.752 0-.001 0-.001-.001-.002.68.364 1.381.56 1.973.674zm3.176-15.74c11.833 0 14.502 16.267 3.469 19.941-.038-.297-.003-.857.021-1.252.058-.951.126-2.059-.213-2.985 5.088-1.059 5.513-6.646 3.554-9.135.243-.952.145-3.189-.729-3.463-.206-.065-1.305-.304-3.437 1.037-1.741-.416-3.62-.417-5.361 0-1.064-.667-3.462-1.752-3.922-.6-.534 1.342-.407 2.427-.248 3.03-1.739 2.204-1.218 5.894.534 7.626-.993-.475-2.361-.637-2.656.314-.323 1.037.912.911 1.679 2.804.073.236.208.513.415.788-6.811-5.565-3.525-18.105 6.894-18.105z' />
      </svg>
    </>
  );
};
