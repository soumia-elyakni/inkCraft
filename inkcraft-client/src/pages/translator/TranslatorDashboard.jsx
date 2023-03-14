import React from 'react'

export const TranslatorDashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div>Hello {user.name} you are {user.role}</div>
  )
}
