package a.jens;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CSVServlet extends HttpServlet {


	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		PrintWriter writer = resp.getWriter();
		writer.println("date,CompactS,HSNTSN,KEinzel,MGPS_V_7.25.0,Regio,Risikofragen");
		writer.println("Jan,2000,2000,2000,2000,2000,4000");
		writer.println("Feb,2000,2000,2000,2000,2000,2000");
		writer.println("Mar,2573,2232,778,2666,2233,2223");
		writer.println("Apr,2923,2472,838,2886,2383,2223");
		writer.println("Mai,2263,2952,948,2996,2883,2423");
		writer.println("Jun,2343,2332,748,2446,2483,2023");
		writer.println("Jul,2673,2992,2338,2536,2283,2203");
		writer.println("Aug,2783,2222,338,2776,2283,2323");
		writer.println("Sep,2893,2002,688,2356,2383,2523");
		writer.println("Okt,2363,2882,778,2646,2783,2723");
		writer.println("Nov,2473,2362,888,2246,2483,2823");
		writer.println("Dez,2000,2000,2000,2000,2000,2000");
		writer.close();
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		super.init(config);
	}

}
