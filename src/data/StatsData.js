import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'
import React from 'react'

export const StatsData = [
  { 
    icon: (
      <GiEarthAmerica 
          color="#047bf1"
      />
    ),
    title: "Over 100 Projects",
    desc: "We dont mess around",
  },
  { 
    icon: (
      <MdAirplanemodeActive 
         color="#f3a82e"
      />
    ),
    title: "Gone International",
    desc: "Have clients who trust us over seas",
  },
  { 
    icon: (
      <MdTimer 
        color="#f34f2e"
      />
    ),
    title: "Fastest Support",
    desc: "Guarenteed to get back to you within 12 hours",
  },
  { 
    icon: (
    <FaMoneyCheck
      color="#3af576"
    />
    ),
    title: "Best Deals",
    desc: "We provide packages that will save you money",
  },
]
