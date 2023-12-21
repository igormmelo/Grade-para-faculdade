type Props = {
  stats: boolean;
};
export const Confirmed = ({ stats }: Props) => {

    if(stats === true){ 
     return(<button className="bg-green-500 rounded-[8px] text-white text-[11px] font-normal py-[4px] px-[8px]">
      Active
    </button>)}else if(stats === false){return(
      <button className="bg-red-500 rounded-[8px] text-white text-[11px] font-normal py-[4px] px-[8px]">
      Inactive
    </button>
    )}
};

