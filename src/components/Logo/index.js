import * as React from 'react'
import { Svg } from './styles'
export const Logo = (props) => {
  return (
    <Svg
      width={451.673}
      height={207.213}
      viewBox='24.164 -28.606 451.673 207.213'
      style={{
        background: '0 0'
      }}
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <defs>
        <linearGradient
          id='prefix__editing-gradow-gradient'
          x1={0.228}
          x2={0.772}
          y1={0.081}
          y2={0.919}
          gradientUnits='objectBoundingBox'
        >
          <stop offset={0} stopColor='#b66df6' />
          <stop offset={1} stopColor='#f0f' />
        </linearGradient>
        <filter
          id='prefix__editing-gradow-filter'
          x='-100%'
          y='-100%'
          width='300%'
          height='300%'
        >
          <feFlood floodColor='#424242' result='flood' />
          <feComposite
            operator='in'
            in2='SourceAlpha'
            in='flood'
            result='shadow'
          />
          <feOffset dx={1} dy={-0.4} in='SourceGraphic' result='offset-1' />
          <feOffset dx={-1} dy={0.4} in='shadow' result='offset-2' />
          <feMerge>
            <feMergeNode in='offset-2' />
            <feMergeNode in='offset-1' />
          </feMerge>
        </filter>
      </defs>
      <g filter='url(#prefix__editing-gradow-filter)'>
        <path
          d='M24.64-50.42q7.13 0 12.06 1.32 4.92 1.32 7.87 5.06 2.95 3.74 2.95 10.69 0 3.08-.92 6.29-.93 3.21-2.29 5.59-1.37 2.37-2.42 3.08-1.23.88-5.46 1.36-4.22.49-9.94.49-2.03 0-6.25-.18V0H4.4v-50.16q9.24-.26 20.24-.26zm6.6 22.61q.88-1.14.88-4.57 0-4.49-1.89-6.34-1.89-1.85-6.56-1.85-1.58 0-3.43.27v13.37q.88.09 3.43.09 6.78 0 7.57-.97zm45.67 17.25q2.2 0 8.19-.44.79 0 2.9-.18l1.32 9.07q-6.78 3.17-17.6 3.17-10.12 0-15.53-5.11-5.41-5.1-5.41-15.4 0-5.28 1.36-10.21 1.36-4.92 3.12-6.86 1.85-1.94 6.87-3.34 5.01-1.41 9.94-1.41 7.92 0 11.88 2.81 3.96 2.82 5.19 7.79 1.24 4.97 1.24 13.33-5.99.36-11.71.36H66.18q0 2.81 1.18 4.22 1.19 1.41 3.39 1.8 2.2.4 6.16.4zM67.06-30.8q-.53.26-.8 2.29-.26 2.02-.35 4.57h4.58q4.13 0 5.98-.08 0-4.23-1.19-5.99-1.18-1.76-4.09-1.76-2.37 0-4.13.97zm47.25-1.06v15.23q0 1.58.09 3.3.09 1.71.53 2.15.61.62 4.31.62l2.99-.09q.79 4.23.79 9.77-1.67.62-4.88 1.14-3.21.53-6.12.53-6.07 0-9.37-2.68-3.3-2.69-3.3-8.32v-21.65h-6.6v-8l6.6-.62 3.96-9.68 11-.62v10.3h9.33v8.62h-9.33zm34.94-9.32q4.13 0 8.62.57 4.49.57 10.47 1.54v35.02q0 12.59-8.36 19.54-1.05.88-4.75 1.49-3.69.62-8.36.62-10.12 0-16.01-2.64-.09-1.94.3-5.1.4-3.17.84-5.02 6.34.97 12.41.97 3.08 0 5.23-.31 2.16-.31 2.69-.92.7-.71 1.05-5.28.09-1.24.09-3.61v-2.2q-2.2 3.25-5.63 4.66-3.43 1.41-6.16 1.41-7.39 0-11.18-4.84-3.78-4.84-3.78-14.17 0-6.16 1.72-11.57 1.71-5.41 4.7-7.52 1.94-1.32 6.3-1.98 4.35-.66 9.81-.66zm-1.85 29.74q3.26 0 5.9-1.06v-18.39q-.97-.17-2.91-.35-.88-.09-2.64-.09-2.73 0-3.43.53-.97.7-1.54 3.92-.57 3.21-.57 6.73 0 4.84 1.1 6.77 1.1 1.94 4.09 1.94zm53.15-29.92q1.15 0 2.42.26 1.28.27 1.89.62 0 1.94-.44 6.38-.44 4.44-.79 6.29-.88-.09-3.25-.09-5.55 0-9.86.62V0h-15.05v-40.48h12.59l1.76 6.51h.08q2.56-3.34 5.46-5.37 2.9-2.02 5.19-2.02zM242.79 0H230.3l-1.41-5.54q-4.05 6.6-11.27 6.6-5.89 0-9.63-3.3-3.74-3.3-3.74-9.29 0-3.69 2.15-6.47 2.16-2.77 5.94-3.91 4.93-1.41 15.23-1.59 0-5.8-.53-6.16-.44-.35-2.82-.35-1.49 0-4.13.18-4.23.17-11.44.97-.71-4.76-1.06-10.21 4.67-.97 9.77-1.63 5.1-.66 9.15-.66 7.04 0 10.56 2.33 3.52 2.33 4.58 6.12 1.05 3.78.97 9.59l-.09 12.94.26 10.38zm-20.06-8.8q2.29 0 4.84-.88v-6.51h-.71q-6.51 0-7.21.7-.44.44-.66 1.32-.22.88-.22 1.67 0 2.12.97 2.91.96.79 2.99.79zm89.93-28.86q1.41 2.11 1.41 16.36V0h-15.05v-24.55q0-3.26-.61-3.87-.71-.71-2.99-.71l-1.06.09q-2.73.18-5.19 1.23.09 1.85.09 6.51V0h-15.05v-25.08q0-2.73-.62-3.34-.7-.71-2.99-.71l-1.06.09q-2.46.09-5.1 1.14V0h-15.05v-40.48h12.23l1.59 6.6q2.9-3.87 6.69-5.68 3.78-1.8 7.65-1.8 3.26 0 6.21.97 2.94.97 4.09 2.73.53.79.88 2.9 2.81-3.43 6.42-5.02 3.61-1.58 7.22-1.58 3.25 0 6.2.97t4.09 2.73z'
          fill='url(#prefix__editing-gradow-gradient)'
          transform='translate(90.765 109.19)'
        />
      </g>
      <style />
    </Svg>
  )
}