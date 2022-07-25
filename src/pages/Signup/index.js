import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    nickname: "",
    description: "",
    email: "",
    location: "",
    typeOfUser: "",
    password: "",
    confirmPassword: "",
  });

  const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/upload-image", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const imgURL = await handleUpload();
      await api.post("/user/signup", { ...form, img: imgURL });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="formName">Name:</label>
      <input
        id="formName"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="formImg">Sua foto de perfil:</label>
      <input type="file" id="formImg" onChange={handleImage} />
      <label htmlFor="formNickname">Nickname:</label>
      <input
        id="formNickname"
        name="nickname"
        type="text"
        value={form.nickname}
        onChange={handleChange}
      />
      <label htmlFor="formDescription">
        Describe yourself in 140 Characters.
      </label>
      <input
        id="formDescription"
        name="description"
        type="text"
        value={form.description}
        onChange={handleChange}
      />
      <label htmlFor="formEmail">E-mail:</label>
      <input
        id="formEmail"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="formLocation">
        <select id="formLocation" onChange={handleChange} name="location">
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option>Europe</option>
          <option>Oceania</option>
          <option>Asia</option>
        </select>
      </label>
      <label htmlFor="formTypeOfUser">
        <select id="formTypeOfUser">
          <option>Pilot</option>
          <option>Owner</option>
        </select>
      </label>
      <label htmlFor="formPassword">Senha:</label>
      <input
        id="formPassword"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <label htmlFor="formConfirmPassword">Confirmação de senha</label>
      <input
        id="formConfirmPassword"
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type="submit">
        Create Account
      </button>
    </form>
  );
}
