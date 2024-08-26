import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataSpesification } from "@/constants";

function AccordionProduct() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-[1rem]">
          About this product
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-[0.75rem] sm:text-[0.875rem] px-2 leading-loose ">
            Space Fantasy Theme. Humanity has always dreamned of SPACE TRAVEL
            and journeying to the stars. We still have a long way to go, but we
            continue to dream of SPACE TRAVEL. Even thought our feet may be
            firmly on the ground, we can give expression to our space fantasies
            in the product we use.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-[1rem]">
          Product spesification
        </AccordionTrigger>
        <AccordionContent>
          <table className="w-full ">
            <tbody>
              {dataSpesification.map((item, index) => (
                <tr
                  key={index}
                  className="flex flex-row items-center text-[0.75rem] sm:text-[0.875rem] "
                >
                  <td className="font-semibold text-start  w-1/2 px-4 py-2">
                    {item.item1}
                  </td>
                  <td className="w-1/2 px-4 py-2">{item.item2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-[1rem]">Package</AccordionTrigger>
        <AccordionContent>
          <div>
            <ol className=" list-decimal list-inside space-y-2 px-2 text-[0.75rem] sm:text-[0.875rem]">
              <li>Space Travel</li>
              <li>Charging cable</li>
              <li>Manual</li>
              <li>Certificate</li>
              <li>Card</li>
              <li>Eartips (S, M, L)</li>
              <li>After sales Card</li>
            </ol>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionProduct;
