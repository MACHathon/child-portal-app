import SubmitField from "@/components/shared-components/input-fields/submit-field";
import TextInputField from "@/components/shared-components/input-fields/text-input-field";
import SelectField from "@/components/shared-components/input-fields/select-input-field";
import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { getCategories } from "packages/Commercetools/Categories/getCategories";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import DeliveryChackBoxes from "./delivrery-checkboxes";
import { createItem } from "packages/Commercetools/Items/createItem";
import { getMe } from "packages/Commercetools/Users/getUser";
import UploadImage from "@/components/shared-components/image-upload/image-upload";

type Category = {
  id: any;
  name: any;
};

const DonateForm: NextPage = (): JSX.Element => {
  const [checkedOption, setCheckedOption] = useState({});
  const [selectedType, setSelectedType] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");
  const [registerItem, setRegisterItem] = useState({
    name: "",
    description: "",
    type: "",
    condition: "",
  });

  const [itemTypes, setItemTypes] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      let categories = await getCategories();
      console.log(categories);
      setItemTypes(categories);
    })();
  }, []);

  const { name, description, type, condition } = registerItem;

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setRegisterItem({ ...registerItem, [name]: value });
  };

  const itemToSubmit = {
    checkedOption: Object.keys(checkedOption),
    name: registerItem.name,
    description: registerItem.description,
    type: selectedType,
    condition: selectedCondition,
  };

  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(itemToSubmit);

    let me = await getMe();

    let response = await createItem(
      itemToSubmit.type,
      itemToSubmit.name,
      itemToSubmit.description,
      me?.postCode as string,
      me?.id as string,
      "5-8",    // TODO not MVP
      itemToSubmit.condition,
      itemToSubmit.checkedOption,
      "" // TODO not MVP
    );

    console.log(response);

    setCheckedOption({});
    setRegisterItem({
      name: "",
      description: "",
      type: "",
      condition: "",
    });
  };

  const onHandleTypeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setSelectedType(value);
  };

  const onHandleConditionChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setSelectedCondition(value);
  };

  const onImageUploadHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files) 
  }

  return (
    <Box width="100%">
      <form onSubmit={onHandleSubmit}>
        <Box
          display='flex'
          width='100%'
          justifyContent='space-between'
          padding='0 5%'
          alignItems='flex-start'
        >
            <Box width='45%'>
              <TextInputField
                isPassword={false}
                name="name"
                placeholder="The name of your item"
                value={name}
                onChange={onHandleChange}
              />
              <TextInputField
                isPassword={false}
                name="description"
                placeholder="Describe your Item"
                value={description}
                onChange={onHandleChange}
              />

              <SelectField
                placeholder="Type of Item"
                name="type"
                onChange={onHandleTypeChange}
                options={itemTypes.map((type) => ({
                  id: type.id,
                  value: type.name["en-GB"],
                }))}
              />

              <SelectField
                placeholder="Item condition"
                name="condition"
                onChange={onHandleConditionChange}
                options={[
                  { id: "New", value: "New" },
                  { id: "Used - good", value: "Used - Good" },
                  { id: "Used - worn", value: "Used - Worn" },
                  { id: "Needs some TLC", value: "Used - Needs some TLC" },
                ]}
              />

              <DeliveryChackBoxes
                checkedOption={checkedOption}
                setCheckedOption={setCheckedOption}
              />
              <Box width="30%">
                <SubmitField value="Submit" bgColor="#EA6699" />
              </Box>
            </Box>
            <Box marginTop='20px' width='302px'>
              <UploadImage onImageUploadHandler={onImageUploadHandler}/>
              <Box
                color='white'
                fontFamily='Raleway'             
                marginTop='30px'
              >
                <Text
                  fontSize='24px'
                  fontWeight='700'
                >
                  Upload photo
                </Text>
                <Text fontSize='18px'>
                  This is not required but would really help us find your items a new home!
                </Text>
              </Box>
            </Box>
        </Box>
      </form>
    </Box>
  );
};

export default DonateForm;
