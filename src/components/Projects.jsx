import asset13 from "../assets/asset13.png";
import asset14 from "../assets/asset14.png";
import asset15 from "../assets/asset15.png";
import asset16 from "../assets/asset16.png";
import asset23 from "../assets/asset23.svg";

const Projects = () => {
  return (
    <section className="px-10 py-20 bg-white">
      {/* Header */}
      <div className="flex justify-between items-start mb-14">
        <h2 className="text-[32px] font-light text-black">Recent Projects</h2>

        <p className="text-md text-gray-400 max-w-md text-start leading-relaxed">
          Step into the world of our most recent projects, a showcase of our
          unwavering commitment to progressive design
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 gap-x-20 gap-y-16">
        {/* Project 1 */}
        <div className="max-w-150 mx-auto">
          <div className="relative rounded-3xl overflow-hidden aspect-4/3">
            <img
              src={asset13}
              alt="The Lighthouse"
              className="w-full h-full object-cover "
            />

            <span className="absolute bottom-4 left-4 bg-white text-xs px-3 py-1 rounded-full">
              2D Animation
            </span>

            <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <img src={asset23} alt="arrow" className="w-6" />
            </div>
          </div>

          <h3 className="mt-4 text-3xl font-light text-purple-600">
            The Lighthouse
          </h3>

          <p className="text-sm text-gray-400 mt-1 max-w-sm">
            Adding a new dimension to projects through thoughtfully designed 2D
            animations
          </p>
        </div>

        {/* Project 2 */}
        <div className="max-w-150 mx-auto">
          <div className="relative rounded-3xl overflow-hidden aspect-4/3">
            <img
              src={asset15}
              alt="Snowscape Haven"
              className="w-full h-full object-cover"
            />

            <span className="absolute bottom-4 left-4 bg-white text-xs px-3 py-1 rounded-full">
              Visual Identity
            </span>

            <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <img src={asset23} alt="arrow" className="w-6" />
            </div>
          </div>

          <h3 className="mt-4 text-3xl font-light text-purple-600">
            Snowscape Haven
          </h3>

          <p className="text-sm text-gray-400 mt-1 max-w-sm">
            Crafting a visual identity that mirrors the serenity and allure of a
            winter sanctuary
          </p>
        </div>

        {/* Project 3 */}
        <div className="max-w-150 mx-auto">
          <div className="relative rounded-3xl overflow-hidden aspect-4/3">
            <img
              src={asset14}
              alt="Navigating Possibilities"
              className="w-full h-full object-cover"
            />

            <span className="absolute bottom-4 left-4 bg-white text-xs px-3 py-1 rounded-full">
              Motion Graphics
            </span>

            <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <img src={asset23} alt="arrow" className="w-6" />
            </div>
          </div>

          <h3 className="mt-4 text-3xl font-light text-purple-600">
            Navigating Possibilities
          </h3>

          <p className="text-sm text-gray-400 mt-1 max-w-sm">
            Motion graphics breathe life into the project, blending direction
            and creativity
          </p>
        </div>

        {/* Project 4 */}
        <div className="max-w-150 mx-auto">
          <div className="relative rounded-3xl overflow-hidden aspect-4/3">
            <img
              src={asset16}
              alt="Nocturnal Symphony"
              className="w-full h-full object-cover"
            />

            <span className="absolute bottom-4 left-4 bg-white text-xs px-3 py-1 rounded-full">
              3D Animation
            </span>

            <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <img src={asset23} alt="arrow" className="w-6" />
            </div>
          </div>

          <h3 className="mt-4 text-3xl font-light text-purple-600">
            Nocturnal Symphony
          </h3>

          <p className="text-sm text-gray-400 mt-1 max-w-sm">
            Through 3D artistry, we orchestrate an animated ode to the evening,
            a dance of shadows and dreams
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
