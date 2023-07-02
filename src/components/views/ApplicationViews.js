import { Outlet, Route, Routes } from "react-router-dom"
import { SunList } from "../suns/SunsList.js"
import { MoonList } from "../moons/MoonsList.js"
import { RisingList } from "../risings/RisingsList.js"
import { UserList } from "../users/UsersList.js"
import { Profile } from "../profile/Profile.js"
import { ProfileForm } from "../createProfile/CreateProfileForm.js"
import { Home } from "../home/home.js"
import { MySphere } from "../mySphere/MySphere.js"





export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>


					<Outlet />
				</>
			}>
				<Route path="/Home" element={<Home />}></Route>
				<Route path="/SunSigns" element={<SunList />}></Route>
				<Route path="/MoonSigns" element={<MoonList />}></Route>
				<Route path="/RisingSigns" element={<RisingList />}></Route>
				<Route path="/Users" element={<UserList />}></Route>
				<Route path="/Profile/:profileId" element={<Profile />}></Route>
				<Route path="/CreateProfile" element={<ProfileForm />}></Route>
				<Route path="/MySphere" element={<MySphere />}></Route>

			</Route>
		</Routes>
	)
}
