import { Outlet, Route, Routes } from "react-router-dom"
import { SunList } from "../suns/SunsList.js"
import { MoonList } from "../moons/MoonsList.js"
import { RisingList } from "../risings/RisingsList.js"
import { UserList } from "../users/usersList.js"




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
				<Route path="/MoonSigns" element={<MoonList />}></Route>
				<Route path="/RisingSigns" element={<RisingList />}></Route>
				<Route path="/Users" element={<UserList />}></Route>
			</Route>
		</Routes>
	)
}
