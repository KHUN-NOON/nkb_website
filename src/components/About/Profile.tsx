type ProfileType = {
    name: string,
    position: string,
    profileUrl?: string
}

const fallbackProfile = 'https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

const Profile = (props: ProfileType) => {
    const { name, position, profileUrl } = props

    return (
        <div id="profile" className="rounded-md border-[1px] border-slate-300 w-[250px]">
            <div id="profile-pic" className="h-[250px] w-full bg-pink-400 rounded-t-md"
                style={{ backgroundImage: `url(${profileUrl}), url(${fallbackProfile})`, backgroundSize: 'cover' }}
            >
            </div>
            <div className="py-4 px-8 flex flex-col gap-2 items-center">
                <p className="text-slate-900 font-semibold">
                    {name}
                </p>
                <p className="text-slate-500 text-sm">
                    {position}
                </p>
            </div>
        </div>
    )
}

export default Profile