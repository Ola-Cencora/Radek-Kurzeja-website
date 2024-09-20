import PageTitle from "../../common/PageTitle/PageTitle";
import RedirectLink from "../../common/RedirectLink/RedirectLink";

const NotFound = () => (
  <section>
    <PageTitle title="There is no such page" />
    <RedirectLink link="/" children="go to home page" justify={true} />
  </section>
);

export default NotFound;
