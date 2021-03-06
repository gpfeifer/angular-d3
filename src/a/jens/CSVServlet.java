package a.jens;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.csc.dip.jvpms.json.value.JsonObject;
import com.csc.dip.jvpms.json.value.JsonValue;

// TODO Wrong name since branch gpf005
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

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		JsonValue jsonValue = JsonValue.read(req.getReader());
		if (jsonValue.isJsonObject()) {
			JsonObject jsonObject = (JsonObject) jsonValue;
			JsonValue year = jsonObject.get("year");
			PrintWriter writer = resp.getWriter();
			if ("2014".equals(year.getString())) {
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
			} else {
				writer.println("date,CompactS,HSNTSN,KEinzel,MGPS_V_7.25.0,Regio,Risikofragen");
				writer.println("Jan,1000,1000,1000,1000,1000,4000");
				writer.println("Feb,1000,1000,1000,1000,1000,1000");
				writer.println("Mar,2573,2232,778,2666,2233,2223");
				writer.println("Apr,2923,2472,838,2886,2383,2223");
				writer.println("Mai,2263,2952,948,2996,2883,2423");
				writer.println("Jun,2343,2332,748,2446,2483,1023");
				writer.println("Jul,2673,2992,2338,2536,2283,2103");
				writer.println("Aug,2783,2222,338,2776,2283,2323");
				writer.println("Sep,2893,1002,688,2356,2383,2523");
				writer.println("Okt,2363,2882,778,2646,2783,2723");
				writer.println("Nov,2473,2362,888,2246,2483,2823");
				writer.println("Dez,1000,1000,1000,1000,1000,1000");
			}
			writer.close();
			
		}
//		super.doPost(req, resp);
	}

//	@Override
//	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		JsonValue jsonValue = JsonValue.read(req.getReader());
//		if (jsonValue.isJsonObject()) {
//			JsonObject jsonObject = (JsonObject) jsonValue;
//			JsonValue year = jsonObject.get("year");
//			PrintWriter writer = resp.getWriter();
//			if ("2014".equals(year.getString())) {
//			    String res = "[{\"date\":\"Jan\",\"CompactS\":\"2000\",\"HSNTSN\":\"2000\",\"KEinzel\":\"2000\",\"MGPS_V_7.25.0\":\"2000\",\"Regio\":\"2000\",\"Risikofragen\":\"4000\"},{\"date\":\"Feb\",\"CompactS\":\"2000\",\"HSNTSN\":\"2000\",\"KEinzel\":\"2000\",\"MGPS_V_7.25.0\":\"2000\",\"Regio\":\"2000\",\"Risikofragen\":\"2000\"},{\"date\":\"Mar\",\"CompactS\":\"2573\",\"HSNTSN\":\"2232\",\"KEinzel\":\"778\",\"MGPS_V_7.25.0\":\"2666\",\"Regio\":\"2233\",\"Risikofragen\":\"2223\"},{\"date\":\"Apr\",\"CompactS\":\"2923\",\"HSNTSN\":\"2472\",\"KEinzel\":\"838\",\"MGPS_V_7.25.0\":\"2886\",\"Regio\":\"2383\",\"Risikofragen\":\"2223\"},{\"date\":\"Mai\",\"CompactS\":\"2263\",\"HSNTSN\":\"2952\",\"KEinzel\":\"948\",\"MGPS_V_7.25.0\":\"2996\",\"Regio\":\"2883\",\"Risikofragen\":\"2423\"},{\"date\":\"Jun\",\"CompactS\":\"2343\",\"HSNTSN\":\"2332\",\"KEinzel\":\"748\",\"MGPS_V_7.25.0\":\"2446\",\"Regio\":\"2483\",\"Risikofragen\":\"2023\"},{\"date\":\"Jul\",\"CompactS\":\"2673\",\"HSNTSN\":\"2992\",\"KEinzel\":\"2338\",\"MGPS_V_7.25.0\":\"2536\",\"Regio\":\"2283\",\"Risikofragen\":\"2203\"},{\"date\":\"Aug\",\"CompactS\":\"2783\",\"HSNTSN\":\"2222\",\"KEinzel\":\"338\",\"MGPS_V_7.25.0\":\"2776\",\"Regio\":\"2283\",\"Risikofragen\":\"2323\"},{\"date\":\"Sep\",\"CompactS\":\"2893\",\"HSNTSN\":\"2002\",\"KEinzel\":\"688\",\"MGPS_V_7.25.0\":\"2356\",\"Regio\":\"2383\",\"Risikofragen\":\"2523\"},{\"date\":\"Okt\",\"CompactS\":\"2363\",\"HSNTSN\":\"2882\",\"KEinzel\":\"778\",\"MGPS_V_7.25.0\":\"2646\",\"Regio\":\"2783\",\"Risikofragen\":\"2723\"},{\"date\":\"Nov\",\"CompactS\":\"2473\",\"HSNTSN\":\"2362\",\"KEinzel\":\"888\",\"MGPS_V_7.25.0\":\"2246\",\"Regio\":\"2483\",\"Risikofragen\":\"2823\"},{\"date\":\"Dez\",\"CompactS\":\"2000\",\"HSNTSN\":\"2000\",\"KEinzel\":\"2000\",\"MGPS_V_7.25.0\":\"2000\",\"Regio\":\"2000\",\"Risikofragen\":\"2000\"}]";
//			    writer.write(res);
//			} else {
//				String res = "[{\"date\":\"Jan\",\"CompactS\":\"2000\",\"HSNTSN\":\"2000\",\"KEinzel\":\"2000\",\"MGPS_V_7.25.0\":\"2000\",\"Regio\":\"2000\",\"Risikofragen\":\"4000\"},{\"date\":\"Feb\",\"CompactS\":\"2000\",\"HSNTSN\":\"2000\",\"KEinzel\":\"2000\",\"MGPS_V_7.25.0\":\"2000\",\"Regio\":\"2000\",\"Risikofragen\":\"2000\"},{\"date\":\"Mar\",\"CompactS\":\"2573\",\"HSNTSN\":\"2232\",\"KEinzel\":\"771\",\"MGPS_V_7.25.0\":\"2666\",\"Regio\":\"2233\",\"Risikofragen\":\"2223\"},{\"date\":\"Apr\",\"CompactS\":\"2923\",\"HSNTSN\":\"2472\",\"KEinzel\":\"131\",\"MGPS_V_7.25.0\":\"2116\",\"Regio\":\"2313\",\"Risikofragen\":\"2223\"},{\"date\":\"Mai\",\"CompactS\":\"2263\",\"HSNTSN\":\"2952\",\"KEinzel\":\"941\",\"MGPS_V_7.25.0\":\"2996\",\"Regio\":\"2113\",\"Risikofragen\":\"2423\"},{\"date\":\"Jun\",\"CompactS\":\"2343\",\"HSNTSN\":\"2332\",\"KEinzel\":\"741\",\"MGPS_V_7.25.0\":\"2446\",\"Regio\":\"2413\",\"Risikofragen\":\"2023\"},{\"date\":\"Jul\",\"CompactS\":\"2673\",\"HSNTSN\":\"2992\",\"KEinzel\":\"2331\",\"MGPS_V_7.25.0\":\"2536\",\"Regio\":\"2213\",\"Risikofragen\":\"2203\"},{\"date\":\"Aug\",\"CompactS\":\"2713\",\"HSNTSN\":\"2222\",\"KEinzel\":\"331\",\"MGPS_V_7.25.0\":\"2776\",\"Regio\":\"2213\",\"Risikofragen\":\"2323\"},{\"date\":\"Sep\",\"CompactS\":\"2193\",\"HSNTSN\":\"2002\",\"KEinzel\":\"611\",\"MGPS_V_7.25.0\":\"2356\",\"Regio\":\"2313\",\"Risikofragen\":\"2523\"},{\"date\":\"Okt\",\"CompactS\":\"2363\",\"HSNTSN\":\"2112\",\"KEinzel\":\"771\",\"MGPS_V_7.25.0\":\"2646\",\"Regio\":\"2713\",\"Risikofragen\":\"2723\"},{\"date\":\"Nov\",\"CompactS\":\"2473\",\"HSNTSN\":\"2362\",\"KEinzel\":\"111\",\"MGPS_V_7.25.0\":\"2246\",\"Regio\":\"2413\",\"Risikofragen\":\"2123\"},{\"date\":\"Dez\",\"CompactS\":\"2000\",\"HSNTSN\":\"2000\",\"KEinzel\":\"2000\",\"MGPS_V_7.25.0\":\"2000\",\"Regio\":\"2000\",\"Risikofragen\":\"2000\"}]";
//			    writer.write(res);
//			}
//			writer.close();
//			
//		}
////		super.doPost(req, resp);
//	}

//	@Override
//	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		JsonValue jsonValue = JsonValue.read(req.getReader());
//		if (jsonValue.isJsonObject()) {
//			JsonObject jsonObject = (JsonObject) jsonValue;
//			JsonValue year = jsonObject.get("year");
//			PrintWriter writer = resp.getWriter();
//			if ("2014".equals(year.getString())) {
//			    String res = "[{\"date\":\"Jan\",\"CompactS\":\"2000\",\"HSNTSN\":\"2000\",\"KEinzel\":\"2000\",\"MGPS_V_7.25.0\":\"2000\",\"Regio\":\"2000\",\"Risikofragen\":\"4000\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2000},{\"name\":\"HSNTSN\",\"y0\":2000,\"y1\":4000},{\"name\":\"KEinzel\",\"y0\":4000,\"y1\":6000},{\"name\":\"MGPS_V_7.25.0\",\"y0\":6000,\"y1\":8000},{\"name\":\"Regio\",\"y0\":8000,\"y1\":10000},{\"name\":\"Risikofragen\",\"y0\":10000,\"y1\":14000}],\"total\":14000},{\"date\":\"Feb\",\"CompactS\":\"2000\",\"HSNTSN\":\"2000\",\"KEinzel\":\"2000\",\"MGPS_V_7.25.0\":\"2000\",\"Regio\":\"2000\",\"Risikofragen\":\"2000\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2000},{\"name\":\"HSNTSN\",\"y0\":2000,\"y1\":4000},{\"name\":\"KEinzel\",\"y0\":4000,\"y1\":6000},{\"name\":\"MGPS_V_7.25.0\",\"y0\":6000,\"y1\":8000},{\"name\":\"Regio\",\"y0\":8000,\"y1\":10000},{\"name\":\"Risikofragen\",\"y0\":10000,\"y1\":12000}],\"total\":12000},{\"date\":\"Mar\",\"CompactS\":\"2573\",\"HSNTSN\":\"2232\",\"KEinzel\":\"778\",\"MGPS_V_7.25.0\":\"2666\",\"Regio\":\"2233\",\"Risikofragen\":\"2223\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2573},{\"name\":\"HSNTSN\",\"y0\":2573,\"y1\":4805},{\"name\":\"KEinzel\",\"y0\":4805,\"y1\":5583},{\"name\":\"MGPS_V_7.25.0\",\"y0\":5583,\"y1\":8249},{\"name\":\"Regio\",\"y0\":8249,\"y1\":10482},{\"name\":\"Risikofragen\",\"y0\":10482,\"y1\":12705}],\"total\":12705},{\"date\":\"Apr\",\"CompactS\":\"2923\",\"HSNTSN\":\"2472\",\"KEinzel\":\"838\",\"MGPS_V_7.25.0\":\"2886\",\"Regio\":\"2383\",\"Risikofragen\":\"2223\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2923},{\"name\":\"HSNTSN\",\"y0\":2923,\"y1\":5395},{\"name\":\"KEinzel\",\"y0\":5395,\"y1\":6233},{\"name\":\"MGPS_V_7.25.0\",\"y0\":6233,\"y1\":9119},{\"name\":\"Regio\",\"y0\":9119,\"y1\":11502},{\"name\":\"Risikofragen\",\"y0\":11502,\"y1\":13725}],\"total\":13725},{\"date\":\"Mai\",\"CompactS\":\"2263\",\"HSNTSN\":\"2952\",\"KEinzel\":\"948\",\"MGPS_V_7.25.0\":\"2996\",\"Regio\":\"2883\",\"Risikofragen\":\"2423\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2263},{\"name\":\"HSNTSN\",\"y0\":2263,\"y1\":5215},{\"name\":\"KEinzel\",\"y0\":5215,\"y1\":6163},{\"name\":\"MGPS_V_7.25.0\",\"y0\":6163,\"y1\":9159},{\"name\":\"Regio\",\"y0\":9159,\"y1\":12042},{\"name\":\"Risikofragen\",\"y0\":12042,\"y1\":14465}],\"total\":14465},{\"date\":\"Jun\",\"CompactS\":\"2343\",\"HSNTSN\":\"2332\",\"KEinzel\":\"748\",\"MGPS_V_7.25.0\":\"2446\",\"Regio\":\"2483\",\"Risikofragen\":\"2023\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2343},{\"name\":\"HSNTSN\",\"y0\":2343,\"y1\":4675},{\"name\":\"KEinzel\",\"y0\":4675,\"y1\":5423},{\"name\":\"MGPS_V_7.25.0\",\"y0\":5423,\"y1\":7869},{\"name\":\"Regio\",\"y0\":7869,\"y1\":10352},{\"name\":\"Risikofragen\",\"y0\":10352,\"y1\":12375}],\"total\":12375},{\"date\":\"Jul\",\"CompactS\":\"2673\",\"HSNTSN\":\"2992\",\"KEinzel\":\"2338\",\"MGPS_V_7.25.0\":\"2536\",\"Regio\":\"2283\",\"Risikofragen\":\"2203\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2673},{\"name\":\"HSNTSN\",\"y0\":2673,\"y1\":5665},{\"name\":\"KEinzel\",\"y0\":5665,\"y1\":8003},{\"name\":\"MGPS_V_7.25.0\",\"y0\":8003,\"y1\":10539},{\"name\":\"Regio\",\"y0\":10539,\"y1\":12822},{\"name\":\"Risikofragen\",\"y0\":12822,\"y1\":15025}],\"total\":15025},{\"date\":\"Aug\",\"CompactS\":\"2783\",\"HSNTSN\":\"2222\",\"KEinzel\":\"338\",\"MGPS_V_7.25.0\":\"2776\",\"Regio\":\"2283\",\"Risikofragen\":\"2323\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2783},{\"name\":\"HSNTSN\",\"y0\":2783,\"y1\":5005},{\"name\":\"KEinzel\",\"y0\":5005,\"y1\":5343},{\"name\":\"MGPS_V_7.25.0\",\"y0\":5343,\"y1\":8119},{\"name\":\"Regio\",\"y0\":8119,\"y1\":10402},{\"name\":\"Risikofragen\",\"y0\":10402,\"y1\":12725}],\"total\":12725},{\"date\":\"Sep\",\"CompactS\":\"2893\",\"HSNTSN\":\"2002\",\"KEinzel\":\"688\",\"MGPS_V_7.25.0\":\"2356\",\"Regio\":\"2383\",\"Risikofragen\":\"2523\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2893},{\"name\":\"HSNTSN\",\"y0\":2893,\"y1\":4895},{\"name\":\"KEinzel\",\"y0\":4895,\"y1\":5583},{\"name\":\"MGPS_V_7.25.0\",\"y0\":5583,\"y1\":7939},{\"name\":\"Regio\",\"y0\":7939,\"y1\":10322},{\"name\":\"Risikofragen\",\"y0\":10322,\"y1\":12845}],\"total\":12845},{\"date\":\"Okt\",\"CompactS\":\"2363\",\"HSNTSN\":\"2882\",\"KEinzel\":\"778\",\"MGPS_V_7.25.0\":\"2646\",\"Regio\":\"2783\",\"Risikofragen\":\"2723\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2363},{\"name\":\"HSNTSN\",\"y0\":2363,\"y1\":5245},{\"name\":\"KEinzel\",\"y0\":5245,\"y1\":6023},{\"name\":\"MGPS_V_7.25.0\",\"y0\":6023,\"y1\":8669},{\"name\":\"Regio\",\"y0\":8669,\"y1\":11452},{\"name\":\"Risikofragen\",\"y0\":11452,\"y1\":14175}],\"total\":14175},{\"date\":\"Nov\",\"CompactS\":\"2473\",\"HSNTSN\":\"2362\",\"KEinzel\":\"888\",\"MGPS_V_7.25.0\":\"2246\",\"Regio\":\"2483\",\"Risikofragen\":\"2823\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2473},{\"name\":\"HSNTSN\",\"y0\":2473,\"y1\":4835},{\"name\":\"KEinzel\",\"y0\":4835,\"y1\":5723},{\"name\":\"MGPS_V_7.25.0\",\"y0\":5723,\"y1\":7969},{\"name\":\"Regio\",\"y0\":7969,\"y1\":10452},{\"name\":\"Risikofragen\",\"y0\":10452,\"y1\":13275}],\"total\":13275},{\"date\":\"Dez\",\"CompactS\":\"2000\",\"HSNTSN\":\"2000\",\"KEinzel\":\"2000\",\"MGPS_V_7.25.0\":\"2000\",\"Regio\":\"2000\",\"Risikofragen\":\"2000\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":2000},{\"name\":\"HSNTSN\",\"y0\":2000,\"y1\":4000},{\"name\":\"KEinzel\",\"y0\":4000,\"y1\":6000},{\"name\":\"MGPS_V_7.25.0\",\"y0\":6000,\"y1\":8000},{\"name\":\"Regio\",\"y0\":8000,\"y1\":10000},{\"name\":\"Risikofragen\",\"y0\":10000,\"y1\":12000}],\"total\":12000}]";
//			    writer.write(res);
//			} else {
//				String res = "[{\"date\":\"Jan\",\"CompactS\":\"1233\",\"HSNTSN\":\"2342\",\"KEinzel\":\"988\",\"MGPS_V_7.16.0\":\"1236\",\"Regio\":\"1433\",\"Risikofragen\":\"1423\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1233},{\"name\":\"HSNTSN\",\"y0\":1233,\"y1\":3575},{\"name\":\"KEinzel\",\"y0\":3575,\"y1\":4563},{\"name\":\"MGPS_V_7.16.0\",\"y0\":4563,\"y1\":5799},{\"name\":\"Regio\",\"y0\":5799,\"y1\":7232},{\"name\":\"Risikofragen\",\"y0\":7232,\"y1\":8655}],\"total\":8655},{\"date\":\"Feb\",\"CompactS\":\"1293\",\"HSNTSN\":\"1342\",\"KEinzel\":\"1588\",\"MGPS_V_7.16.0\":\"1556\",\"Regio\":\"1763\",\"Risikofragen\":\"1223\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1293},{\"name\":\"HSNTSN\",\"y0\":1293,\"y1\":2635},{\"name\":\"KEinzel\",\"y0\":2635,\"y1\":4223},{\"name\":\"MGPS_V_7.16.0\",\"y0\":4223,\"y1\":5779},{\"name\":\"Regio\",\"y0\":5779,\"y1\":7542},{\"name\":\"Risikofragen\",\"y0\":7542,\"y1\":8765}],\"total\":8765},{\"date\":\"Mar\",\"CompactS\":\"1573\",\"HSNTSN\":\"2232\",\"KEinzel\":\"778\",\"MGPS_V_7.16.0\":\"1666\",\"Regio\":\"1233\",\"Risikofragen\":\"1223\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1573},{\"name\":\"HSNTSN\",\"y0\":1573,\"y1\":3805},{\"name\":\"KEinzel\",\"y0\":3805,\"y1\":4583},{\"name\":\"MGPS_V_7.16.0\",\"y0\":4583,\"y1\":6249},{\"name\":\"Regio\",\"y0\":6249,\"y1\":7482},{\"name\":\"Risikofragen\",\"y0\":7482,\"y1\":8705}],\"total\":8705},{\"date\":\"Apr\",\"CompactS\":\"1913\",\"HSNTSN\":\"2472\",\"KEinzel\":\"838\",\"MGPS_V_7.16.0\":\"1886\",\"Regio\":\"1383\",\"Risikofragen\":\"1123\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1913},{\"name\":\"HSNTSN\",\"y0\":1913,\"y1\":4385},{\"name\":\"KEinzel\",\"y0\":4385,\"y1\":5223},{\"name\":\"MGPS_V_7.16.0\",\"y0\":5223,\"y1\":7109},{\"name\":\"Regio\",\"y0\":7109,\"y1\":8492},{\"name\":\"Risikofragen\",\"y0\":8492,\"y1\":9615}],\"total\":9615},{\"date\":\"Mai\",\"CompactS\":\"1163\",\"HSNTSN\":\"2952\",\"KEinzel\":\"948\",\"MGPS_V_7.16.0\":\"1996\",\"Regio\":\"1883\",\"Risikofragen\":\"1423\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1163},{\"name\":\"HSNTSN\",\"y0\":1163,\"y1\":4115},{\"name\":\"KEinzel\",\"y0\":4115,\"y1\":5063},{\"name\":\"MGPS_V_7.16.0\",\"y0\":5063,\"y1\":7059},{\"name\":\"Regio\",\"y0\":7059,\"y1\":8942},{\"name\":\"Risikofragen\",\"y0\":8942,\"y1\":10365}],\"total\":10365},{\"date\":\"Jun\",\"CompactS\":\"1343\",\"HSNTSN\":\"2332\",\"KEinzel\":\"748\",\"MGPS_V_7.16.0\":\"1446\",\"Regio\":\"1483\",\"Risikofragen\":\"1023\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1343},{\"name\":\"HSNTSN\",\"y0\":1343,\"y1\":3675},{\"name\":\"KEinzel\",\"y0\":3675,\"y1\":4423},{\"name\":\"MGPS_V_7.16.0\",\"y0\":4423,\"y1\":5869},{\"name\":\"Regio\",\"y0\":5869,\"y1\":7352},{\"name\":\"Risikofragen\",\"y0\":7352,\"y1\":8375}],\"total\":8375},{\"date\":\"Jul\",\"CompactS\":\"1673\",\"HSNTSN\":\"2992\",\"KEinzel\":\"1338\",\"MGPS_V_7.16.0\":\"1536\",\"Regio\":\"1183\",\"Risikofragen\":\"1203\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1673},{\"name\":\"HSNTSN\",\"y0\":1673,\"y1\":4665},{\"name\":\"KEinzel\",\"y0\":4665,\"y1\":6003},{\"name\":\"MGPS_V_7.16.0\",\"y0\":6003,\"y1\":7539},{\"name\":\"Regio\",\"y0\":7539,\"y1\":8722},{\"name\":\"Risikofragen\",\"y0\":8722,\"y1\":9925}],\"total\":9925},{\"date\":\"Aug\",\"CompactS\":\"1783\",\"HSNTSN\":\"2112\",\"KEinzel\":\"338\",\"MGPS_V_7.16.0\":\"1776\",\"Regio\":\"1283\",\"Risikofragen\":\"1323\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1783},{\"name\":\"HSNTSN\",\"y0\":1783,\"y1\":3895},{\"name\":\"KEinzel\",\"y0\":3895,\"y1\":4233},{\"name\":\"MGPS_V_7.16.0\",\"y0\":4233,\"y1\":6009},{\"name\":\"Regio\",\"y0\":6009,\"y1\":7292},{\"name\":\"Risikofragen\",\"y0\":7292,\"y1\":8615}],\"total\":8615},{\"date\":\"Sep\",\"CompactS\":\"1893\",\"HSNTSN\":\"2002\",\"KEinzel\":\"688\",\"MGPS_V_7.16.0\":\"1356\",\"Regio\":\"1383\",\"Risikofragen\":\"1523\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1893},{\"name\":\"HSNTSN\",\"y0\":1893,\"y1\":3895},{\"name\":\"KEinzel\",\"y0\":3895,\"y1\":4583},{\"name\":\"MGPS_V_7.16.0\",\"y0\":4583,\"y1\":5939},{\"name\":\"Regio\",\"y0\":5939,\"y1\":7322},{\"name\":\"Risikofragen\",\"y0\":7322,\"y1\":8845}],\"total\":8845},{\"date\":\"Okt\",\"CompactS\":\"1363\",\"HSNTSN\":\"2882\",\"KEinzel\":\"778\",\"MGPS_V_7.16.0\":\"1646\",\"Regio\":\"1783\",\"Risikofragen\":\"1723\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1363},{\"name\":\"HSNTSN\",\"y0\":1363,\"y1\":4245},{\"name\":\"KEinzel\",\"y0\":4245,\"y1\":5023},{\"name\":\"MGPS_V_7.16.0\",\"y0\":5023,\"y1\":6669},{\"name\":\"Regio\",\"y0\":6669,\"y1\":8452},{\"name\":\"Risikofragen\",\"y0\":8452,\"y1\":10175}],\"total\":10175},{\"date\":\"Nov\",\"CompactS\":\"1473\",\"HSNTSN\":\"2362\",\"KEinzel\":\"888\",\"MGPS_V_7.16.0\":\"1246\",\"Regio\":\"1483\",\"Risikofragen\":\"1823\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1473},{\"name\":\"HSNTSN\",\"y0\":1473,\"y1\":3835},{\"name\":\"KEinzel\",\"y0\":3835,\"y1\":4723},{\"name\":\"MGPS_V_7.16.0\",\"y0\":4723,\"y1\":5969},{\"name\":\"Regio\",\"y0\":5969,\"y1\":7452},{\"name\":\"Risikofragen\",\"y0\":7452,\"y1\":9275}],\"total\":9275},{\"date\":\"Dez\",\"CompactS\":\"1553\",\"HSNTSN\":\"2862\",\"KEinzel\":\"948\",\"MGPS_V_7.16.0\":\"1876\",\"Regio\":\"1683\",\"Risikofragen\":\"1923\",\"product\":[{\"name\":\"CompactS\",\"y0\":0,\"y1\":1553},{\"name\":\"HSNTSN\",\"y0\":1553,\"y1\":4415},{\"name\":\"KEinzel\",\"y0\":4415,\"y1\":5363},{\"name\":\"MGPS_V_7.16.0\",\"y0\":5363,\"y1\":7239},{\"name\":\"Regio\",\"y0\":7239,\"y1\":8922},{\"name\":\"Risikofragen\",\"y0\":8922,\"y1\":10845}],\"total\":10845}]";
//			    writer.write(res);
//			}
//			writer.close();
//			
//		}
////		super.doPost(req, resp);
//	}

}
