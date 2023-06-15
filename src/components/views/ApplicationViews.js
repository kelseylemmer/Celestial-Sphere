import { Outlet, Route, Routes } from "react-router-dom"
import { SunList } from "../suns/SunsList.js"



export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Celestial Sphere</h1>
					<div></div>

					<Outlet />
				</>
			}>

				<Route path="/SunSigns" element={<SunList />}></Route>

			</Route>
		</Routes>
	)
}
