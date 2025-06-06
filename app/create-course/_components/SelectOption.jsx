import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

const SelectOption = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldname, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldname]: value,
    }));
  };
  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label htmlFor="" className="text-xm">
            {" "}
              Enter the difficulty level for the course
          </label>
          <Select
            onValueChange={(value) =>
              handleInputChange("level", value)
            }
            defaultValue={userCourseInput?.level}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Please select the difficulty level of the course"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner"> Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="" className="text-xm">
              Course Duration
          </label>
          <Select
            onValueChange={(value) => handleInputChange("duration", value)}
            defaultValue={userCourseInput?.duration}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Specify the duration of the course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hourse">1 Hour</SelectItem>
              <SelectItem value="2 Hourse">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hourse">
                More than 3 hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="" className="text-xm">
          Would you like to add video content to the course?
          </label>
          <Select
            onValueChange={(value) => handleInputChange("displayVideo", value)}
            defaultValue={userCourseInput?.displayVideo}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="">Enter the number of chapters</label>
          <Input
            onChange={(e) => handleInputChange("noOfChapter", e.target.value)}
            defaultValue={userCourseInput?.noOfChapter}
            type="number"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
