import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans leading-normal tracking-normal">

      <main className="container mx-auto px-4 py-8 md:py-12">
        
        {/* Hero Section */}
        <section className="text-center py-16">
        
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">安秀萍</h1>
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mt-2">新闻学专业学生</p>
          <p className="max-w-2xl mx-auto mt-4 text-lg">
            欢迎来到我的课程期末项目
            <br />
            <br />
            本项目旨在展示 Next.js, React, 和 Tailwind CSS 的学习成果。
            <br />
            <br />
            请使用上方的导航栏浏览我的作品集，或与 QAnything 智能问答机器人进行互动。
          </p>
          <div className="mt-8">
            <Link href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
              联系我
            </Link>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-xl my-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">关于我</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-8">
                <p className="mb-4">
                  我是一名学生,就读于西北民族大学新闻传播学院,2023级新闻学2班学生
                </p>
                <p>
                  在我的学习生涯中，我学习到了html、css、javascript、react、next.js等前端技术
                </p>
              </div>
              <div className="md:w-1/3 mt-8 md:mt-0">

              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">专业技能</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">类别</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">技能</th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">熟练度</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="py-4 px-6 font-medium">前端</td>
                    <td className="py-4 px-6">HTML, CSS, JavaScript</td>
                    <td className="py-4 px-6">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full">
                        <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "95%" }}> 95% </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">框架</td>
                    <td className="py-4 px-6">React, Next.js</td>
                    <td className="py-4 px-6">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full">
                        <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "90%" }}> 90% </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">后端</td>
                    <td className="py-4 px-6">Node.js</td>
                    <td className="py-4 px-6">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full">
                        <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "75%" }}> 75% </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">工具</td>
                    <td className="py-4 px-6">Git, Github, Trae</td>
                    <td className="py-4 px-6">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full">
                        <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "85%" }}> 85% </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white dark:bg-gray-800 rounded-lg shadow-xl my-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">我的项目</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
                 <iframe src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg4MDd8MHwxfHNlYXJjaHwyMHx8ZmlsbXxlbnwwfHx8fDE3NTEzNzM3ODl8MA&ixlib=rb-4.1.0&q=80&w=1080" width="468" height="400"></iframe>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">项目一</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    个人自我介绍网页作业。
                  </p>
                </div>
              </div>
              {/* Project 2 */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
                <iframe src="https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg4MDd8MHwxfHNlYXJjaHwzfHxmaWxtfGVufDB8fHx8MTc1MTM3Mzc4OHww&ixlib=rb-4.1.0&q=80&w=1080" width="468" height="400"></iframe>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">项目二</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    一个使用CSS、HTML制作的课程知识网页。
                  </p>
                </div>
              </div>
              {/* Project 3 */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
                <iframe src="https://images.unsplash.com/photo-1748452478615-6f417bc4d29e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTEzNzcwMzZ8&ixlib=rb-4.1.0&q=80&w=1080" width="468" height="400"></iframe>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">项目三</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base">
                    一个对本学期所有上传到GitHub仓库作业的提交表格。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">联系我</h2>
            <p className="max-w-2xl mx-auto text-center text-lg mb-12">
              如果您有任何问题，请随时通过以下方式与我联系。
            </p>
            <div className="text-center">
              <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline text-xl">3304483392@qq.com</a>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
