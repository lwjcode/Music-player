import java.io.IOException;
import java.io.Writer;


/**
 * Created by LuWenjing on 2017/4/21.
 */
public class ServletReadLrc extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        String songname = request.getParameter("name");
        readLyrics rl = new readLyrics(songname);
        String lyrics = rl.getLyrics();
        response.setCharacterEncoding("utf-8");
        Writer out = response.getWriter();
        if (lyrics != "") {
            out.write(lyrics);
        }
        else{
            String error = "error";
            out.write(error);
        }
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        doPost(request, response);
    }
}
