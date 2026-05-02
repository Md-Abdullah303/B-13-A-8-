'use client'
import {Label, ListBox, Select} from "@heroui/react";
import { useRouter } from "next/navigation";

export function FilterAnimals() {
    const router = useRouter();

    const handleKeyChang = (key)=>{
        if(key === 'high'){
            router.push(`?sort=high`)
        }else if(key === 'low'){
            router.push(`?sort=low`)
        }
    }
    // console.log(router);

  return (
    <Select  className="w-[256px]" placeholder="short by price">
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="florida" onClick={()=> handleKeyChang('high')} textValue="Florida">
            High to Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="delaware" onClick={()=> handleKeyChang('low')} textValue="Delaware">
            Low to High
            <ListBox.ItemIndicator />
          </ListBox.Item>
          
        </ListBox>
      </Select.Popover>
    </Select>
  );
}