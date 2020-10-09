import React from 'react'
import classNames from 'classnames'
import style from './style.module.css'

const App = ({ className }) => {
	return <div className={classNames(style.app, className)}>Hello World!</div>
}

export default App
