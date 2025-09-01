import ContactHeader from "../Components/ContactHeader";
import ContactLeft from "../Components/ContactLeft";
import ContactRight from "../Components/ContactRight";

function ContactPage() {
  return (
    <div>
      <ContactHeader />
      <div className="flex justify-center pt-9 flex-wrap">
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  );
}

export default ContactPage;
