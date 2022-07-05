import { HomeView } from "../views/HomeView";
import { FilmsView } from "../views/FilmsView";
import { FilmDetails } from "../views/FilmDetails";
import { LocationsView } from "../views/LocationsView";
import { PeopleView } from "../views/PeopleView";
import { PersonDetails } from "../views/PersonDetails";
import { SpeciesView } from "../views/SpeciesView";
import { VehiclesView } from "../views/VehiclesView";
import { TemplateView } from "../views/TemplateView";

export const routes = [
  {
    path: "/",
    element: <HomeView />,
    title: "Home",
    isNavLink: true,
  },
  {
    path: "films",
    element: <FilmsView />,
    title: "Films",
    isNavLink: true,
  },
  {
    path: "films/:id",
    element: <FilmDetails />,
    title: "Film Details",
    isNavLink: false,
  },
  {
    path: "people",
    element: <PeopleView />,
    title: "People",
    isNavLink: true,
  },
  {
    path: "people/:id",
    element: <PersonDetails />,
    title: "Person Details",
    isNavLink: false,
  },
  {
    path: "locations",
    element: <LocationsView />,
    title: "Locations",
    isNavLink: true,
  },
  {
    path: "species",
    element: <SpeciesView />,
    title: "Species",
    isNavLink: true,
  },
  {
    path: "vehicles",
    element: <VehiclesView />,
    title: "Vehicles",
    isNavLink: true,
  },
  {
    path: "new",
    element: <TemplateView title="New View" />,
    title: "New",
    isNavLink: false,
  },
];
