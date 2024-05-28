import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({user, children}) => { // user아래 있는 컴포넌트 즉, todopage를 react에서는 자동으로 children으로 인식
    
  return ( // Navigate를 통해서 redirect to /login으로 보내기
    <div>
        user ? children : <Navigate to = "/login" />;
    </div>
  )
}

// User 값이 있으면 ? TodoPage : redirect to / login

export default PrivateRoute
