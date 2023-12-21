import { Confirmed } from "./components/stats";
import { Students } from "./data/Students";

const Page = () => {
  return (
    <div>
      <table className="max-w-[110rem] w-full mx-auto">
        <thead>
          <tr className="bg-slate-700	text-white text-sm ">
            <th className="w-1/2 text-left rounded-tl-md py-2 pl-3">Name</th>
            <th>Status</th>
            <th>Grade 1 </th>
            <th>Grade 2 </th>
            <th className="rounded-tr-md">Final Grade</th>
          </tr>
        </thead>
        <tbody className="max-w-[110rem] w-full mx-auto bg-slate-300">
          {Students.map(({ name,image, email, stats, rate1, rate2 }) => (
          <tr key={name}>
            <th className="w-1/2 text-left flex items-center">
              <img
                src={image}
                alt="imagem aleatoria"
                className="w-[35px] rounded-full h-[38px] my-[10px] mx-[10px]"
              />
              <ul>
                <li className="text-[15px]">{name}</li>
                <li className="text-[13px] font-normal">{email}</li>
              </ul>
            </th>
            <th>
              <Confirmed stats={stats}/>
            </th>
            <th>{rate1}</th>
            <th>{rate2}</th>
            <th>{(rate1 + rate2) / 2} </th>
          </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};
export default Page;
