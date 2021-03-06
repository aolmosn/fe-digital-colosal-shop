/* eslint-disable max-len */
import React, { FC } from 'react'
import { SvgIcon } from '@material-ui/core'
import ImagenLogo from '../../assets/SVG/Logo.svg'

type Props = {
  color: string
  width: number
  height: number
  // borderColor: number
}

const Logo: FC<Props> = ({ color, width, height }) => {
  // const color = '#231f20'
  // const color = 'green'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 731.06 732">
      <g id="Layer_2" data-name="Layer 2">
        <g id="logo">
          <path
            fill={color}
            stroke={color}
            strokeMiterlimit={10}
            d="M28.38,429.2Q11.57,457.79,6.45,493V382.22H70.7A156.32,156.32,0,0,0,28.38,429.2Z"
          />
          <path
            fill={color}
            stroke={color}
            strokeMiterlimit={10}
            d="M160,313H120.39V78.53h38.32q50.32,0,76.62,27.41t26.29,81.5v16.15q0,54.32-26.29,81.87T160,313Z"
          />
          <path
            fill={color}
            stroke={color}
            strokeMiterlimit={10}
            d="M158.71,9.07H6.45V5h517Q468,6.4,425.16,27.06q-46,22.17-70.62,63.31c-1.29,2.14-2.53,4.31-3.7,6.51-.45-.7-.91-1.38-1.39-2.08q-28.08-40.89-78.09-63.3T158.71,9.07Z"
          />
          <path
            fill={color}
            stroke={color}
            strokeMiterlimit={10}
            d="M399.94,595.54v-.15H286.65q-1.33,31.77-22.09,46.39T204.5,656.39q-46.44,0-65.41-25.62t-19-85.35V519q1-55.08,20.78-80.21t62.31-25.11q41.9,0,62.34,14.85t21.75,49H373Q392.2,515.85,456.92,541q28.23,11,72.72,22.81t62.17,22.8q17.7,11,17.69,30.76,0,17.43-16.4,27T548.47,654q-44.18,0-63.79-14.23T465,595.54Z"
          />
          <path
            fill={color}
            stroke={color}
            strokeMiterlimit={10}
            d="M726.06,5V727H6.45V577.71q8.7,63.1,51.31,101.24,53.56,47.91,146.74,47.91,56.51,0,100.49-16.4t68.33-46.25c.63-.78,1.26-1.58,1.87-2.38q23.54,27.54,69.23,43.52Q491,721.63,548.47,721.62q81.48,0,128.23-27.93t46.75-76.88q0-61.26-76.62-96.11-31.49-14.36-80.51-26.78t-68.5-24.09q-19.49-11.65-19.47-26,0-16.38,17.69-27t48.2-10.64q30.19,0,47.89,12.57t17.69,35.36H723.45q0-34.1-22.4-60.61a123.88,123.88,0,0,0-30.58-25.79q35.06-12.5,55.46-30.39V184H532.78V245.8H612v57.91q-21.74,15.63-66.23,15.64-51.92,0-76.13-28.06t-24.19-83.94V184.8q.31-53.31,23.71-82t66.22-28.71q35.71,0,55.19,13.33T615.87,132H725.62q-8.11-63.31-57-95.22Q622.52,6.68,541.3,5Z"
          />
          <rect
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={color}
            // className="cls-2"
            x="5"
            y="5"
            width="719.6"
            height="721.99"
          />
          <rect
            strokeWidth={20}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke={color}
            // className="cls-3"
            x="5"
            y="5"
            width="721.06"
            height="722"
          />
        </g>
      </g>
    </svg>
  )
}

export default Logo
