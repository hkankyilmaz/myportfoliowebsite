import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors, isDirty);
  return (
    <div className="header">
      <div className="header-up">
        <div className="header-up-child"></div>
        <p className="header-first-text">Hakan KARAYILMAZ</p>
        <p className="header-second-text">FRONT-END DEVELOPER</p>
        <p className="header-third-text">"Just İmagine..."</p>
        <p className="index-one">Contact</p>
        <p className="index-two">Home > Contact</p>
      </div>
      <div className="contactme">
        <div className="contactme-left">
          <p style={{ marginBottom: "0px", fontWeight: "600" }}>
            <FontAwesomeIcon fade size="lg" icon={faAt} /> E-Mail :
          </p>
          <p>hkankyilmazz@gmail.com</p>
          <p style={{ marginBottom: "0px", fontWeight: "600" }}>
            <FontAwesomeIcon fade size="lg" icon={faPhone} /> Phone :
          </p>
          <p style={{ minWidth: "120px", textAlign: "center" }}>
            0551 553 98 72
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="contactme-right">
          <div className="name-email-div">
            <TextField
              sx={{
                marginRight: "20px",
                marginBottom: "20px",
                minWidth: "150px",
              }}
              variant="outlined"
              id="outlined-helperText"
              label="Name"
              size="small"
              {...register("Name", {
                required: "Required Field",
              })}
              error={!!errors.Name}
              helperText={errors?.Name ? errors.Name.message : null}
            />
            <TextField
              sx={{ marginBottom: "20px" }}
              variant="outlined"
              id="outlined-helperText"
              label="Email"
              size="small"
              autoComplete="Email"
              {...register("Email", {
                required: "Required Field",
                pattern: {
                  value:
                    /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/,
                  message: "Invalid email adress",
                },
              })}
              error={!!errors.Email}
              helperText={errors?.Email ? errors.Email.message : null}
            />
          </div>

          <TextField
            sx={{ marginBottom: "20px" }}
            variant="outlined"
            id="outlined-helperText"
            label="Subject"
            size="small"
            {...register("Subject", {
              required: "Required Field",
            })}
            error={!!errors.Subject}
            helperText={errors?.Subject ? errors.Subject.message : null}
          />
          <TextField
            sx={{ marginBottom: "20px" }}
            multiline
            variant="outlined"
            id="outlined-helperText"
            label="Message"
            rows={5}
            size="small"
            {...register("Messages", {
              required: "Required Field",
            })}
            error={!!errors.Message}
            helperText={errors?.Message ? errors.Message.message : null}
          />
          <Button
            type="submit"
            sx={{ maxWidth: "200px" }}
            size="small"
            variant="contained"
          >
            Send Message
          </Button>
        </form>
        <p className="create-text">Contact Me for new Project...🚀</p>
      </div>
    </div>
  );
};

export default Contact;
