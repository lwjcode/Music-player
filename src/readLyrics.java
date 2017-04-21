import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;

/**
 * Created by LuWenjing on 2017/4/21.
 */
public class readLyrics {

    String lyricsname = "";

    public readLyrics(String readLyrics){
        this.lyricsname = readLyrics;
    }

    public String getLyrics(){
        try {
            String encoding="GBK";
            String lyrics = "";
            String filePath = "C:\\Users\\LuWenjing\\IdeaProjects\\Music-player\\lyrics\\"+lyricsname+".lrc";
            File file=new File(filePath);
            if(file.isFile() && file.exists()){ //判断文件是否存在
                InputStreamReader read = new InputStreamReader(
                        new FileInputStream(file),encoding);//考虑到编码格式
                BufferedReader bufferedReader = new BufferedReader(read);
                String lineTxt = null;
                while((lineTxt = bufferedReader.readLine()) != null) {
                    lyrics = lyrics + lineTxt + "\n";
                }
                read.close();
                return lyrics;
            }else{
                System.out.println("找不到指定的文件");
            }
        } catch (Exception e) {
            System.out.println("读取文件内容出错");
            e.printStackTrace();
        }
        return "";
    }

}
