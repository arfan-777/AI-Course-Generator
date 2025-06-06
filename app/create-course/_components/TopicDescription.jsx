import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext } from "react";

const TopicDescription = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldname, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldname]: value,
    }));
  };

  return (
    <div className="mx-20 lg:mx-44">
      {/* Input  Topic
       */}
      <div className="mt-5">
        <label>
          Write a course topic
        </label>
        <Input
          className="h-14 text-l"
          placeholder={"Enter the subject of your course (e.g., Python Programming, Yoga, Digital Marketing, etc.)."}
          defaultValue = {userCourseInput?.topic}
          onChange={(e) => handleInputChange("topic", e.target.value)}
        />
      </div>
      {/* TextArea  */}
      <div className="mt-5 ">
        <label htmlFor="">
          {" "}
          Tell us more about the course
        </label>
        <Textarea
          placeholder=" Share what you’d like to include (optional)"
          className="h-24 text-l"
          defaultValue = {userCourseInput?.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default TopicDescription;
