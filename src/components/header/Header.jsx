import profile from '../../images/profile.png';

export default function Header() {
  return (
    <div className='w-full'>
      <div className="container flex justify-between items-center mx-auto px-2 py-4">
        <h1 className='text-3xl font-bold'>Your Blog</h1>
        <img src={profile} alt="profile pic" className='w-14 h-14' />
      </div>
      <hr />
    </div>
  )
}
