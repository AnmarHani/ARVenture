<script>
  import Dropdown from "../components/Dropdown.svelte";
  import InputWithIcon from "../components/InputWithIcon.svelte";
  import TextArea from "../components/TextArea.svelte";
  import Button from "../components/Button.svelte";
  import SubTitle from "../components/SubTitle.svelte";

  import sendContactAPI from "../api/send-contact.js";

  let firstName;
  let lastName;
  let gender;
  let countryCode;
  let mobile;
  let dateOfBirth;
  let email;
  let language;
  let messageBody;
  let country;

  const onSubmit = async () => {
    const result = await sendContactAPI(
      firstName,
      lastName,
      gender,
      countryCode + "" + mobile,
      dateOfBirth,
      email,
      language,
      messageBody,
      country
    );
    alert(result);
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <SubTitle>Contact Us Now</SubTitle>
  <div class="name-container">
    <InputWithIcon
      placeholder="First Name"
      required
      bind:value={firstName}
      icon="bx bx-user"
      min={3}
      max={50}
    />
    <InputWithIcon
      placeholder="Last Name"
      required
      bind:value={lastName}
      icon="bx bx-user"
      min={3}
      max={50}
    />
  </div>
  <Dropdown
    bind:value={gender}
    label="Choose Gender"
    list={["Male", "Female"]}
  />
  <div class="phone-container">
    <Dropdown bind:value={countryCode} list={["+966", "+1", "+91"]} />
    <InputWithIcon
      type="tel"
      placeholder="Phone Number"
      required
      bind:value={mobile}
      icon="bx bx-phone"
      min={10}
      max={15}
    />
  </div>

  <InputWithIcon
    type="email"
    placeholder="Email Address"
    required
    bind:value={email}
    icon="bx bx-envelope"
    min={6}
    max={100}
  />
  <Dropdown
    bind:value={language}
    label="Choose Language"
    list={["Arabic", "English", "Spanish", "French", "Chinese"]}
  />
  <InputWithIcon
    type="date"
    placeholder="Date of Birth"
    required
    bind:value={dateOfBirth}
  />
  <Dropdown
    bind:value={country}
    label="Choose Country"
    list={[
      "Saudi Arabia",
      "United States",
      "Germany",
      "United Kingdom",
      "China",
      "Spain",
      "Pakistan",
      "India",
    ]}
  />

  <TextArea placeholder="Message" bind:value={messageBody} />

  <Button type="full-width-radius" isSubmit={true}>Submit</Button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.4vh;
    margin: 15px auto;
    width: 80vw;
    background-repeat: no-repeat;
    color: white;
    background-size: cover;
    background-image: url("/plainpurple.png");
    border: 2px solid rgba(255, 255, 255, 0.2);
    padding: 15px;
    border-radius: 15px;
  }
  .name-container {
    display: flex;
    gap: 15px;
  }
  .phone-container {
    display: flex;
    align-items: center;
    gap: 15px;
  }
</style>
