<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web前端设计教程</title>
    <style>
        .banner {
            width: 100%;
            height: 400px;
            background: url('images/背景.png') center/cover no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
        }
        :root {
            --primary-color: #367eea;
            --secondary-color: #98cdee;
            --text-color: #333;
        }
        body {
            font-family: 'Microsoft YaHei', sans-serif;
            line-height: 1.6;
            color: var(--text-color);   
            margin: 0;
            padding: 0;
        }
        
        header {
            background: var(--primary-color);
            color: rgb(251, 250, 250);
            padding: 1rem 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        nav a:hover {
            text-decoration: underline;
        }
        
        h1, h2, h3 {
            color: var(--primary-color);
        }
        
        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 20px;
            margin-bottom: 30px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        table, th, td {
            border: 1px solid #ddd;
        }
        
        th, td {
            padding: 12px;
            text-align: left;
        }
        
        th {
            background-color: var(--secondary-color);
            color: white;
        }
        
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        
        .feature-img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
            margin: 20px 0;
        }
        
        .flex-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin: 20px 0;
        }
        
        .flex-item {
            flex: 1;
            min-width: 200px;
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>Web前端设计教程</h1>
            <nav>
                <a href="file:///D:/git%20demo/web%20%E4%BD%9C%E4%B8%9A/%E8%AF%BE%E5%89%8D%E5%87%86%E5%A4%87.html">课前准备</a> |
                <a href="file:///D:/git%20demo/web%20%E4%BD%9C%E4%B8%9A/HTML%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html">HTML基础</a> |
                <a href="file:///D:/git%20demo/web%20%E4%BD%9C%E4%B8%9A/CSS%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html">CSS基础</a>
            </nav>
        </div>
    </header>

    <div class="container">
        <section id="home" class="card">
            <img src="C:\Users\安秀萍\Desktop\背景.png" alt="前端设计" class="feature-img">
            <h2>欢迎学习Web前端设计</h2>
            <p>本教程将带您从零开始学习现代Web前端开发技术，包括HTML、CSS和JavaScript基础知识。</p>
            
            <div class="flex-container">
                <div class="flex-item">
                    <h3>课前准备</h3>
                    <p>下载、注册、安装软件</p>
                </div>
                <div class="flex-item">
                    <h3>HTML基础知识</h3>
                    <p>学习构建网页结构的标记语言</p>
                </div>
                <div class="flex-item">
                    <h3>CSS基础知识</h3>
                    <p>掌握美化网页的样式技巧</p>
                </div>
            </div>
        </section>
        <section class="card">
            <h2>快速链接</h2>
            <table>
                <tr>
                    <th>名称</th>
                    <th>链接</th>
                </tr>
                <tr>
                    <td>课前准备</td>
                    <td><a href=file:///D:/git%20demo/web%20%E4%BD%9C%E4%B8%9A/%E8%AF%BE%E5%89%8D%E5%87%86%E5%A4%87.html target="_blank">访问</a></td>
                </tr>
                <tr>
                    <td>HTML基础知识</td>
                    <td><a href=file:///D:/git%20demo/web%20%E4%BD%9C%E4%B8%9A/HTML%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html target="_blank">访问</a></td>
                </tr>
                <tr>
                    <td>CSS基础知识</td>
                    <td><a href=file:///D:/git%20demo/web%20%E4%BD%9C%E4%B8%9A/CSS%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html target="_blank">访问</a></td>
                </tr>
            </table>
        </section>
    </div>

    <footer style="background: #333; color: white; text-align: center; padding: 20px; margin-top: 50px;">
        <p>© 2025 Web前端设计教程 | 联系方式: 3304483392@qq.com</p>
    </footer>
</body>
</html>
