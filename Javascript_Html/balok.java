public class balok {
   public static void main(String[] args) {
      System.out.println("Program Menghitung volume, luas, dan keliling Balok");
      System.out.println("===================================================");

      int panjang = 10;
      int lebar = 5;
      int tinggi = 6;

      int Luas =  2 *((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
      int volume = panjang * lebar * tinggi;
      int keliling = 4 * (panjang + lebar + tinggi);

      System.out.println("Panjang : " + panjang);
      System.out.println("Lebar : " + lebar);
      System.out.println("Tinggi : " + tinggi);
      System.out.println("===================================================");
      System.out.println("Luas Balok adalah : " + Luas);
      System.out.println("Volume Balok adalah : " + volume);
      System.out.println("Keliling Balok adalah : " + keliling);

   }
}