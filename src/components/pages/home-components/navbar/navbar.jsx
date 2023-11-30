import Button from "../../../common/button/Button";

export const Navbar = () => {
  return (
  <div className="flex justify-between items-center pt-[24px]">
    <div><h2 className="text-blue-500 font-segoe-ui font-bold text-[36px]">Socielity</h2></div>
    <ul className="flex justify-between items-center gap-[60px]">
      <li><a href="#" className="text-text-1 font-bold">Socielity</a></li>
      <li><a href="#" className="text-text-1 font-bold">Resources</a></li>
      <li><a href="#" className="text-text-1 font-bold">Platfrom</a></li>
      <li><a href="#" className="text-text-1 font-bold">Support</a></li>
      <li><a href="#" className="text-text-1 font-bold">Login</a></li>
    </ul>
    <Button>Explore More</Button>
  </div>
  )
};
