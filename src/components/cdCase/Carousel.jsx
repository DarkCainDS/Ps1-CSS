import React, { useState } from "react";
import "./Carousel.css";
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      imageUrl:
        "https://cdromance.org/wp-content/uploads/2015/11/megaman-x4-playstation-front-cover.jpg",
      imageUrl2:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhIWFRUWGBYYGBgYFRcYHxUdGBgWFhgZGBcfHSggGBolHRcVITEiJSkrLi4xGSAzODMtNygtLisBCgoKDg0NDw8QDysZFRkrNysrNys3LSsrLSstNzctKysrKystLSsrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOIA3wMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQUGBwIDBAj/xABLEAABAwIEAwUFBAUICQQDAAABAgMRAAQFEiExBhNBByJRYXEUMoGRoSNCUrEVYsHR8BckM0NyksLSCBY0NVRzgrPxlLLT4VNVg//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8AvCloooCiiigKKKKAopCah/FfaLZWXdUvmOdEI1Px8BQTAmmrFuIrW2TmffQgDxUPyqmH+McZxVWWyaU02TGYCNP7fX4Cu2w7HlLIexG7KjrIzH1OpM+O1A+4z23WDejCHHz5AJHzNRq47XsUe0tbFKfNSVrn8h9anGEcHYawQGbbmKH3inT4k/Cpla2DSQMrSU+UVBRbnEPE73u5mx+q02I+YNY8vilX9e7/AHkj/DXoFKAOlLFB59I4pT/Xu/EoV+aayHFXEzHvpLv9plB+qctegMtIpAPQVRRdt20X7RAu7AHxKc7f5hQ+tSvBe2jDnoDudhR/GJH95NSvEWAZDlolxM9ACSNdfLpUYxXgLCrn3muStUgEApOgncdPjQTnDcYt7hIUy8hwH8Kga7pqhsR7JLq3Jdw66JiSAFGdPMb/ABBrDDe0zE8PUG8RYUtG2ciCY8FbKPlvQX7RUa4X43s75MsujN1QrRSfgakgoFooooCiiigKKKKAooooCiiigSab8Zxhm2bLjywlI11MU1cacYMWDRW4oZvupnUnoAKqnDsEvcdd590VM2gMpRqM38eP5b0G/GuOL/FHTb4Y2pLcwpyI+I/D+dPfDXZfbW/2t64X3VEEpPeBO40M5j5mplg1gyw3yLJCUgQM4TpPr10mnm0w1KO8e8vqo6k/uoORhlwjKyENN9NNdhpHTWa6m8MRJKk5iYJkkiROwOgGp+ld4FLQYJQPCsgKWiaApDXFiuIclCnC244E6lLSM6vgmZV6DWo9adoDDqc7dtdrRJBUGNARuFHN3T5GKCX0VFTxu1MezXU/8tH+eskcZoJgWl2TEwGkqMeMBdBJ4rS/bIWIWkKB01E1CMR7WMPYXy3kvoWN0ltJI9YUYPrTt/rk3APs11BEiUNiR4j7TUedA7fo6JyLUmSDvOWDJCQdBNN+JWSXUlF0ylxJEFQSCe8qAmOoA1M1znjZr/h7j+61/wDJWu948YaRzHLe6SiQnNy0EFRMBKYWcyp6CTQV9xL2U5SbjDHShaZOVKiIg9OqfqKOE+1G4tVi1xRBEaByPhKv31adq0HUJebSthSgCErTlMfrIkx8daYOJeG7e9RyrptLbp9xfRR6EHoaCY2F826kLbUFJOoINdU155Yub/AH8q8zlqSN/ug7fxt6HSrs4Z4iYvWUusrBB6dR4gjxFA9UUgNLQFFFFAUUUUAai/HPFzVgwXFGVfdT1J6ACnTiDGW7VhbzigEpBOvpVPcMYS7jV4b66lNq0o8tKjofD9/8CQz4S4UexJ39I4iTy9S20dgBqND0/M6mrUt2eaAlEtsAQANCsER8E6nzrK2a52gSEsJ7oEDvx102A6VycX8OLukAsPrYdR7pSohKo+44kdDtI1HTwoJCw0EiEiB4AQK2A1VnNa9kffcQ4w9bqyOJdvHg0pQ3DTySQv0Go0BimzgXFf0hznBauoaZSZV7Y93lxKUAlWUCDJUdAI8aC5ya5nMQaSYU6hJ8CoA/KqOw7HUC4TatuuXry1KU44Lh1DFukGVJbI1cQgT3zvHnWHsgvFretcD9qZK1JS+u4UC5l0Ku8sab0Fo8W9oNjYpBcc5iz7rbZClK894A8zUS/l4sf+Guv7rX+eo23h1vmNv+hG13gGYsNuqPJT4vOE5UkgghIJOo9KzwTBLa7cu7R3C27NTLDhL+crSyuAEZ1A5dJKt/umgkP8vFj/w11/da/wA9RnibtOw58F1q0dRcSmVKS1kfSFDO1cJzEOtqTIGZJKTBERWHCdnY3F21ZtYa24zlJ9pdKwt1CJSp7INgpYOUHp6V02LWGPYmbG3w+3Ww3nU9cKURkS2JcI1ACQYSCepmgsXgrDrUtONcllQacIbUWkGWXAHmDJTJhtYTP6hqAdq1ku2ZfFseSkPJW4Ghy+a3cJIQFqTqsJcQtMbapp54O4vbVcuItGm02Vs0A7crkdxsrKUoToAkZiEzrA1owPjJd9iC81q0i0ZbLi3nQcwZSc6CobAlaQoT0BoK24U7O3n1JL6VoCtUtJA5ix4qnRpP6yqujDOErO0bbcuUtw0FJabjMlrP7wTmlbripMk+OiU0z8I8ctG3vLhDIQ0h5DbCdeZcqWIRmUd1KOXfafKmfijtIbtypDzSLi9SChWTMltiRqhK5lStYKkxQZcc8ZWjOZsMNpVqOShtsOGRpzXAIYQfASsyPdrT2ccYYaQly7ATdIJQy2GypDSegtWkg5CdidVkzrrVdN4Z7esOMt8kTDyzo2FEAhLSUjMtw69wSo/M1bXB3AtvaltLpLbjswkxznUgSoqI/oGusJOkCVTpQSJzjhyVFNr3QTGZ3UAfiASQg9YmY3otuJF3bzVsbYFLrZdLjb4Vy0DRKj3d1E6DqJ8K2cY4i2w37MjuNhGd0I0KWhACEjfO4qEAbnvdRXfwThKm21PPJAfuIWsD+rSBDbI/VQnT1JPWgzxnD0OgsPthTS+6gxOTSIVO4061T2I4fdYDdc5mV2qz3kAmIJ3B6GNj5Qav99oKBB2O9RrFMPQUm3uO805ohRSDkJ0CfMH9/SgcOGeIGrxlLrSgQoA/wOh6RTyDXn1hx/AL7KqTaOK8zlnb1EdfAeIq+MNvUOtpWgyFCZHnQddFAooCsFrABNZ1BO1jij2OzUEH7VzuNjrJmSB1ga/Kgg/F125jOJJsWSfZ2VAuqB0URuPQa/H0FWlZ4alCEWzKQGmwAogxqPu/lPlUX7NeH/YLFK1ibh/Uyde8dpOu1S27Llu0Awwp9ZOozoT6qUVESPIUDk88hsawkbAAb+SQPyFQjiXi/v8As7SFPPKBi3aOsfiuHR/Qt+IBk/MV3PN3bqVBVm4CrQr9rbSqPBJSk5B6VG2OCb9C0oZZtWbUKzOt+0OFy5O45z3LlSc0SOoEdaCK9orZt2mzeuIeu3hDDCE/YWbZ3U20NFL2AJ3PjXSuxW1hoVdZrXDmgCLYKyvX7hM/bLHuhZ6DYa9NJtfcI3Dryrnk2iLkiEuqU69ytIGRBASI6Cu9zhh51ttu4Fo7yiFJK2nFnN1Xqsd40FKIbQylNs443bP3sKuFe6m0tzqllI6KWIJEzliZmpK6hqzs1XNrjdxct2xbSGG1ZUSo/ZpXCu6iRJ8QCKsC44GzrU4sWZWsypXsclR8SVLOtMl9w1jDalotUYcppcalnlkwSU5kwRI9aCMYHjLKLFxFlcuPYtdqDri2kmQtRzEKUU5Q2mTO3WOlY45f31xbchKnLy1tjnvni5kD6kfaLaSuNGkxGg3ilxy+4islBPs7XfBhVtbZxA3BKRI6bjX51H7DifHHXlNIUptQA5iVtJaQykSczpUAG0+Z30AkwCEl4ZNw4hSkJ5VziMgZUwmys2e5KR00TlSN+7OutNOF4K5kulptlpt3HEtNtpBC7vIYaZBgFDJX33FHcADoDVkcH4TfKQC9duKkD7UoCJB1hhvKCE/rrEncJE0545xNb2raglSVcvuqcWs5GzB7q1jVxyf6tEq2nKNaCtbzA7z2VTNsygsW6w7cqWggXryYJShvdbKDCQBoYHTd44f4auH0pZuElAuVpur9eXLnAI5NojwTsVRsJ1qLXvaq4bpstlXKzpDri9FLRm1SlA0aRBJjU+JMTV2cJvZmlIUZUytTZJ3I95CpOplCk60FM4jcv4eLi5uBledffVZMnL9nnJCrggbBKCEp8NhFNnBPAKrotuvSouhTiW82WU5o5rzkSlCjMASpUGI1IkfbFg6UkuLQVJYfS4QFQSzc++men2yFDTbmU1Wvashpa1NNPN58vdStohISAlKUygnKB08z40Fo/oVdmEC2t+c5BSHcqEot06nKyyVDL06yqJUpVdfC2CLbU7dvt/zhScgkhS8oOYyraVqAOUd0QkdKjuC8VvOptnHHnGEu5nCHUoP2KTAMpRopatAPAE05YtxK688hFopYQpQaRlSEl9cZ3F5lphLDSNyB3lKAGoghGsQ9oeUFbXQukFbLiS4hx3LLTYIWJaYbOY7d7vb1b9qFBKQsgqgZiBAJ6kCTA+NRfhXhhbLhdeyylJS0kEqjOc7zilFIzOuLJJMbACpaBQKa57u2StBQsSlW4ropCKCF8UYAi8YVbOhPNSklET7o2gnroPlUG7JuInLR9WG3RMp/oidNB0+Ak/8Aircxe0KgFoMLRqI6+I+NVN2w4CoJaxK3BStshRI0iNT8OvwVQXShVZVF+AOIk3to26N4hQ/CRoR86lAoMXFQJqkH0nFseyHW3tNT4EjU/En8qs7jzGRa2Tz3VKTHr0/ZUG7HsOLGHuXa/wCluFEg9dVQPmSaCx7cZ3VHu5EQlIAG/UzEpPT4CnPLXJhttkbSIgwM3iTGs120CURS0UCRRRS0CViRWVBoIbxDc4g67yWWXGbce+82Wy65rs2CYbB/GZO8Ab0xWGBXLJ7lokoSrMhCkZgFf/kX9t9s6TrzFyR0y1Z2WgCggl8vEngELaUlGbvhtGRTiYgoz83MifFJB0qtuLezvFrl8ltClMjRpCy22GkkzkS2klKQPEanc616BcdSncgVpN+34/SgoHh/sefmb1DoAPuM5DmHmskBPyNWNhFrf261ltnuKS0hKFJKsobSUgqVzJWsggEn8IqcIvWz96PXSuhKgdjNBXePYdeXcB+2BQUqQ4gIIzoUQSJ5ndUCAQehG1duHe2IHszlqp21Ugt5wG2XG0kZcqkoOVYgnvJynympzRloIyxwNZpACfaUgAAAX14AkAAAAB6AABGld+FcNW1u4XG0rLhTlzuPPPEJmYSXFqyidTETp4U8UkUCBNZUUUBRRRQYqFMeJWSFlxhcZXwcsgnvASST8Bp5Hxp+puxq2zIkHKpBzhUExG+g30oKX7ML1WH4k9YOSEKJKAToIOo/Z8KvhJqiO2W2LF1a4g0N4UdI1EZtOkiPrVy8PX4eYbcSZCkg/MUFZdvt8pSLazQdXnJI8QmP2lNT3DLBLaLa2BgNISSmN4Aj6mq04oHtXE1sydUspQSPPvLP5o+VW3Zpl5xciNEiJ0jUzpvQOKRWVYhVLNAtIaAaJoCiaKKAooFBoMXFgCTTXc3xOidBWvELvMYGw+tcZXVkZtbFKrHNUd4m4xtLLR93v7htHeUfCRPdHrUFve2bX7G0BH66z+wUMW5NbG3CNQYqpsM7ZWyQH7YoHUtqzR/0nf4VYeC47b3TfMt3EuJ0BjQoPgpO6f4ihiUWl9OitD4+NdpVUaC6cba4K0KQFZVZTlPhIIn4b0sJWX6ft8+QupCpjynaM20+VZnGmOYpvmpzJBKhOwSJV8gZqvMQWWU/aMOKU2hscoc4ZuWnKtCQltSXErICwZBk6xFaf9YRLjfJeJaSH0rLTmR5evOZQCiQpaHFo1MbeFRpYrHENsuMrqddp0nroToaG+IbYmA8nrBJgGN4UdD1OnhUGs7By5bysyQm2s0OB0OZVFsSpttCgEpUSkgr13FMN/YXYxIOFS3bVb7DhtFNPZ08s7JSUcuEaq0VCsoGtBaqeJLYz9qkQJkggEeIn3vhWI4otJjnoBEAyYjMQEz4TOk1VmHWbzZuva31XKHn21NjI+rk/a5+YvM2OTCYGUddKfL3HHlIcU7bFtLrLrgUEKUXnGHGywkoCcySUJ2UBQWa04FAEag0OIkR/GulIydBAgeERE67dKzNBXHaXhPOwt5EDNbkKEGe6NyZ1mK09hOLc2wDZOrKi2fQap+hTUsxS3C3HWiNHmVD1IB6fKqo7BbotXV3bq6QqP7JUhX+Gg7uCU87iW+d3DecfIBv/DVq4EJStXVS1H6xVV9j5nE8VWro47r6uqq2cHcUpsKMakkQAIE6TGkxQRXtnvXWcLdcZdW0sLaAW2tSFCXADCgQdq87DjDEv/2N5/6l7/NXoHt1/wB0Pf22f+4K8zMsqWoJQkqUdAlIJJ9AN6C18A4cxi8sUXjWMPpzFQKF3L491WXReaKifEN7jNk5yrm7vEK3H85dIUPFJza1anDbKmeG1peSptSOZmCgUlPfCtQdRprTB27YzbXDNoGHEuqTK1KR3glKkpABUNNSDoaDLsGxu6fvXUv3T7qQ1IS46tYBncBRMGr5Fedv9Hgfz93/AJJ/91eiRQLXJiLuVB8TpXXTZiytUj1NEprIqJdo3FvsFv8AZke0OyGuuTxcI65ek9Y8DUuNeee1zEC7iTqZ0aytgegkx86qQw4dYXV/cBDYU686SSSfiVKV0Gu9Wzg/YOCkG6uzm/C2kED/AKlb/KnzsGwBDVl7SQOY+SZjZIMAD1gmrSio0ofiHsLcQgqs7jmkAnluJCSY/CoaT61WeGYjdYdc5kS062cqkqBgjqhaeqT/APYivYkVR3+kLgKE8m8QmFE8tyPvaEoProRQTnh7F27u3buGtErGqSZKFD3knzB+keNO9uohSSPEVT/YNiSv5xbn3YS4nyPumPhVvorTKt7HtExd7+iTZwp1bSAWndkqgknmQkCRvFdLvG2NITmUbEd0nLy3iQZAAyhyYJnvbCNadHOBMNatS+pu473eWlt90SpR1JSFADfXwpqRgOCznQ3d95JGcXDnebEpWZzzkSQQQay03/6245ClD2EhE5pbdEFObNu5qAREjQzpWq04zx1acyU2BkSkZViZTmA/pNFE90DxIrpu+GMKStbYbu3ChAMpunIWkR7hK4KRmj1kdDRZ8I4Q4l0Nt3Eonue1OBS4GuVOfplPj7vpQNl12iYulZQj2JxQQpZCWXtAlamzuvfMlfy867LjjPG0JWtQscqElc8t0+6BI0c371KOHcGR9qW7lvM22tKjcuAuJeVsCFz7yjI9T6vOGdn+Gvc0BFykoWUKBune9KUmdFkEEFPy8qCY8KX67izt33AAt1pC1BIIEqSCYkk/Wnam/ALVLVu20gQhsZEgkmAglIkncwBThQNl6IdaVruU6CZnx8Nqo3hD7DiO4b2zF9P5Of4avPGFQWjr7426zVFYicnFCj+s4fmw5QP/AGOf7xxYdc7v/eXVqcP/ANCk67q6z1OxqrOzpPK4gxJo6Zi4oD1VnH0UKtPBFDIQIGVahoCOs0ER7df90Pf22f8AuJqsOFO0W0trVLKbZdq8AAq4tkMOLcA3nm7T8Y6VZ/br/ud7+2z/ANxNUqri+3WnK5apVlzFuQmJKQBzNO93hOm1BZGDccWTmHvNi7KHS4pafalZ1wVJIUs6BzqYSdtK4b7tPtrdZWm5usQdAUkCRb2wnQgNJHe6wSFnzqEK4lshmbTbAtpWsNxlHckHWdVExM76xSHimyMj2MZeg7mmgEeh3mglvYjiHtGK3L3Lba5jZVkaTlQnUCEp6ba+c1flUD2OYqyrEXnUthpAt9QBpoo6wPIpHwq/WzIkbHagypqxgap9DTrXDijconw1pEpnmvN/afalvE7kHQKWFj0Uka16PIqr+2nhpTjab1tMloZXgBrlnur84Oh8AfWtVIl3YpiiHMOabnvNygj0JP5EVYoNeRuD+LH8Pdzt95J99B2V5+Rq6sH7acPWkc4ONK6jLmHzFZaWhNU1/pC4onkNMAjMpzNHkkH9prux/tqskIItgt1cad3KB8TVIcQY29evl10kkmEgawJ0AHU/nQTrsHtibi4c+6loJ+KlbVdKDUU7OOGzZWaULEPOHmOjqkxCUH+yN/M1LEJmB46fOtMtDL6VthhzKpMapUyo7dZDnlWpVvblSfsGpWtCgTbbqA7qj39MoO/nWbd3qQLlQhRSE5JM6z18QfnXSi6B5auepUriQgiSSlIT8+uu5rLTU48yVqWpCM6jCibZRJyHu/f8gfhWsqYPMSGkHmSV/wA2UM+UFUk59DoY863t3aSogXRk6gBJganqenStzGIIQoKcfKkqSQkFBE+e2+n1oGxv2dOgt24WlI/2URCQMoKc3pp5eVdtndNMghtKW86pOW2UJJAEnveED4U4rxxkEgkjaDlPe0SqUx5KFdVneocnL0jcRvtQc9vfoSQ0ZKiSJCTBMnzMD99OYNAApaBsxg6tDxcFUXjPe4oUB+Jf0Ycq88UUC4ygiZVPXSBuKpLBk8/il5Q2Sp8/Jso/xUD0+PZuKwdhctpPkZRkP1QatSyJS64lSiSSFAd4wIjciBrVZdtzJZuMPv0/1buRR8iQofDRXzqx0vDnNuCIeSBv5ZtPp86Duv1AJEoC5IEGI9daY2MZt1RDI1JAhCTBSnmEGBocutSB5lKwAZ6HeK5kYU2DIB+Z8I+caelA2WeKsOxkZSSRI7qemmummoNZO4kyDCmkhXhCZMgHTTqFD1Jiu9GDMiMqIiYgkRO8Uv6IanNlJVG8mdNRr8BQc+G3bbsFLYCVaAwNdMwPjBGop4TXHa4a22SUJjUnyk7mK7BQLWKxWVIaBhurcoVHTpXOUdOmxGhB8QQdNRofEVIbhgKEH/xTQ/bFG+3j++qzYqLi/smStSnbBSUEySyvRP8A/NXQT906Cq8vOBsQQohVo76gBQPxFemCmsRQ15ywvs8xF4wLZSB+JyEjzq1OCOzliyUHnSHrgapMdxo/iQDqV/rHboKnMUqU0NIkU4Yexus6AbfvotLAnVWg8PH91dd+8ltsnMEfdSSNATomfjFLSGQ3ahr7QIJES0NJOqZjxOlI3fKzAKfHeIAhoicxAAkp86TnTlCXW9k/cJImSNMunTXrQzcAOAqdbgK1GXWdY1y6GajTdavLJ0dTlRl+5qR03GvT50puVAFXOGRJggtmRKT1id4112rX7SFKIQ41CpgBJ2mEkwK2P3UOAcxsJJEogyozGmmsmfpQa0XasuYPhSAQJLczrqNvCNa22S3lyW3kqT4lEHU6ax3tJrUH5cMPNcsakEQQNCDMR1TWbLyg4Al5oJUqQkaZgVAADTU9PjQOti26meYsL8CBEb9PHau2uKyDwP2mUjXUHz00jw0+FdhNA03b6ebJn7JKl9IiDPnOlU32JtF7E725PRKoP/NczD6IqxePMSTb2F7cBQJUjlpI8SMoHnqajv8Ao94XksnHj/XOmD+qgZB9QqglnahgnteHPtASoJzo/tI7w+cRTP2b4qbvCWlZvtGO6dJ1b8RvqJqw1pkEHrVPcIn9G41c2C9Gbr7Rrwk6wPmRQW7auBSUqGxEj41upqwkBslmT3ZKd/dJ0EncinWaAopKWgKKKKApK5cTvUstqcXOVO8CTuBp5600/wCtbOv2bv3vup+6CpUd7oAflQSCaQimIcUNkE8p6EzJyJ0jee/Tphl8h9pDqJKFpCkkiCQdRIoBzD0HxHpWg4X+t9KcqKBuRho6qPyrqZtUp2HxOprdS0MYk0zYtdnZCmzuClZEEzsfkR604XpcCTy0hStNCY9aaWbV0kqWwiSRqDOipz+h0BHrQcoBBhJtyAdZSgSPEAagx+R8q2XCFHvZWSk7k5emk/Mj51tRauBMi1RJ3GfWIJ3neQPnWSWn4j2ZEbRn8SJ+GlBrdcgk5bcE+4SYKoMAkD0PyrTzlTmKLZMyCSdeh33GpGnnXWbRagnNbpkAj3piNo11nWtIw5zbkNxJMaEyY1OvhH90UGvvFIIRamdDr1CtIPUbaelKl9UiE20g+PuwZH1ms04c5pmt0T5QY90nc6agx6Vudw0lchlOUnvbaiQZ38JoHCyW6oyrLlyiIMyTBJnwrLFbjI2VfAeZOg9K6GmwkAAQBoB4AU24glSnUTAaRK1k7EiYj0gmgqntyvylm1sEarcIWpPiT3UA/Ek/9NWlwdhItbNhgfcbSD5mNT6zNVDgCTi2PruCCWbclWv6pyoH7avdAoMqrXtp4fW7bovWARcWZ5gI3KAZUPOD3vnVlVrcbBBBAIIIIPWfHyoIrgPECbyzavGQCuBnA3TGi0+Q61J7V8LSFAyCAap3DCcCxRVuv/Ybs5mVHZBJ90+aZA9INWgwrkr0jkrIKTOyjvHkd6B4oFANAoFooooGbi9E2jw2kASNIlQ671VnEPEltb3SrC3w+4uLmckG5dQlwkFXdAcMiFK00nWrV4rH81d9E/8AuTVKdu9gWcRYuUqW3zUJBWgkFJQcpykfeymaCbcDYO84h7261SwBq2hu4fMZpKs6S8qZOutTThERZsAbBtI+VVV2d4/h7FwWLIXlyp+EuvOCQmAYUQOm+tWtwp/sjE/gH7aB3ooooEFE0tMmNYwGwpKZC+6kK7oSlS/dkk+GpjYUDzIpZqFX2IXKVrCXTlQcpUUA651QDBkkgAbdPOuRd/fBWU3SQqDA5SFa91ABCVkgyqdYExqKCwJpaiuAXr6nBzlk++ISE5cwg5ZBMFInT61KRQLSUtIaBaKKxWYH8aUHNiF0ltBUfgI3J2FVz2n8QiysVJBPPud9dgfAToPTpPjUwvL9IC7h3RlsSmfvHxFVbwrZrxvFFXjom0tld0HZbg1QmPAaKPwHWgnPZJwsbKxTzBDz0OOTuJHdSfQfU1ORSJrKgKKKKCOcb8LN4haqYc0V7za+qFgaKn6HyqF9nXEa5XhOI924alKSrTmJG0K6+Iq1iKg3aVwP7ahL9url3jOrSxpmjXIT+R6UEkw65Ug8l0yoe6o/fB118+kU6hVVrwDxqLweyXqeVdtGClUpKinqBvm8amzN6ULDbpEkSFbA67etA6zSE1iFTSqoGji1KjaPBHvZdPWRFVzxFc3D4dL9s1cKtUFbfMQhaVqKSTkTkhfu7HxFTp7ELwLeHIKkpJ5ZCR3h3I+94Zq1Kv78N6W4K+YUjRI7uUkGM3jAmaCP29/eoUWWgyhASojKG0pEEJKe63AOojyqYcHlXsVvnEK5acw8D1FNlpiOIEgKtwNzJAHRJAjNvv8AEx0rrwq+vFOhLrGVvvd7QRE5RE+mtBIQaWkFLQFRPiBtUuJyKOciCErIgtKaVqkbgqBjSRUsrHLQQ25Uo82GnTnWFohCh7qlyZjSNPWtVrbrkLDQKw4lSy2ytvMlJClZu6kKVmAIETpU4iiKCJYDannheQiM41bI7pKilUkDvGYiNAKlooy0tAUUUhNAE0y3b/OVkSSG06uLmBoNU+Y119KzfvFuKKGtEp95zoI3A8TVbcf8auPODDcMGd5w5SpP112ECSSdBEmg4ONcXdxO6Rhdho2mA4sTCE9ST6fn51bXDWBtWdu3bsiEIHxUTqpRPUkyfjTN2d8FN4cxlnO+vV1z8R8B1yj671LgKAFLRRQFFFFAUhFLRQQXtB4ATe5bhhXJvG/ccGmeNkORuPA9PSmPhTjtWf8AR+LI5VwkhIUdA4NpCvTqDVqkVHOMODrbEG8j6YUPccTots+IPh5GoOvnrZ7x77ajooEkpnbT8O21ObL6ViUkEeIqnmsUxLA1Bu7SbqymEvpElI/X6pPr8zU9wHF7W8RzLN5IJOYgePgpNUSiKAKaW8TUiA+nL+snUH91OTL6VCUnMPEa0GyKWKKWgBRSTS0BRSUtAUlLSTQLSE1qduEpGpHpO/kPOm39JrdMMoMaHMsECJEx49fpQd9zeoQO8oJ067/LrTbcvlxOday0yBJB0Kx01+7Ph6Ux8ScSWNhLj7oW791JIJHgAKg6WcTx5QJzWtjPvHQuA75E7nTrt60G3iPjJ++c/R2ENmNluDZI2JKukfxO1Trs/wCBWcObMHmPrH2jx3V1KU/hTPz3NOnC3DNtYtcq2bCU6Sd1LPipXWnsCgAKWiigKQ0tFAUUUUBRSGlFAURRRQanmEqBSoAg6EEAgg7gjYiq14i7JWs/Pwx5Vk/vCSeWT6bo+Ejyqz6SKCnmuNsVw48vFLRTrY05zYzAjxMafH6VKsB4swu77zDyULO6ZyH4p0H5VNXWgoEEAg7giQfUVDOIOy/DbklXJ5Tm+do5DPjA0PxqCRoDoQcqw4ZGU+I8460qsRUkDOyuTvlhQH1qtVdnWK2smwxMqT0Q/P1UJ/Ksv0vxLbf0tm3cAfebUn8pBPyoLIbxlozqRBAMgiJrajE2zssGZA8yBJHyqrkdqN03Ifwe5T4/ZLA+qdax/lltxouydSR0y7H5b00We5jLKd1p2BGu4IBBHiNaw/TjX3cyttkq6mJ221qs/wCWNhWiLF1RGkBE7aRtS/ym4g5oxhFwfPlLj5xTVWYq+cPuMk94jvEJ26+la7guSSt5LaPAQDHhmPXzFVv7bxPc6Jtm7YHqtafyBKvpWbfZdf3BzYhiayDuhqR8Mx6fCgeMc43wuzMrd5zu/wCMk9PIVHV8RY3isosrf2Vg6c1wZdPKf2TU24d7OMNtIU3bhax99zvmfHXQVLkoA0GgoiuuFOye2YUH7xRvLjQ5nJyJPkg+96q+QqxUp0pYpaoQCloooCiiigKKKKAooooENApaKAooooCkNLRQJSUUUAKxNFFCsVGlSKKKICNKUUUVRkKKKKiwtLRRQFFFFAUUUUBRRRQFFFFB/9k="
    },
    {
      id: 2,
      imageUrl:
        "https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv94kIv9HksLjxnPxCceQaXUC5wshzdfn5lW3GRRLT85OrAYYa70fnD2101ikJLQlY1szGj4z29Y_POO8o1Xw-_Izz-tML5hUh14PvM2QatESdsQjaGe7ntqN61sej13625WKzAGlv-Sxnta7kqA9xL6UCf5OKA/240.jpg",
      imageUrl2:
        "https://images.launchbox-app.com/c75924a2-6a04-4419-b244-1aa80f5e7542.png",
    },
    {
      id: 3,
      imageUrl: "https://m.media-amazon.com/images/I/71350ljw7SL.jpg",
      imageUrl2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-po2gMA8av6c5GuHt9quqol_Q7uHl9Zl7NsOSOcn0bX4b-HDVBmQhW572Vt5XScpPHfI&usqp=CAU",
    },
    {
      id: 4,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRycwCgBFr3MdaLxNBM5AEN_nb1bwPAwFe17D4r1PS2qQ&s",
      imageUrl2:
        "https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv97V_0EQ4r08HPjczSYNEtdlkFcUvbAxY5dHvojK68-hxJ-rZYnbByRbJm0ibBwm0jjmSk3t8vYIiMVsWFbAOvCUdn4k11UHypAE91drAkP98NnHb4ls01FfhJ_dR0rK1HIpVoZB_7hETBKmjvBHkLQbNm4Xtg/240.jpg",
    },
    {
      id: 5,
      imageUrl:
        "https://http2.mlstatic.com/D_NQ_NP_627383-MLC46562226070_062021-O.webp",
      imageUrl2:
        "https://cdn.mobygames.com/covers/6769054-tekken-3-playstation-media.jpg",
    },
    {
      id: 6,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcxV_8R2rqHLZiqDyj_VFUzy-17XOUI59UmVATjrblA&s",
      imageUrl2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7yiPaTtIWWjvbGQr3JixEUjuvE-xELOvTkwwSzYZ5A&s",
    },
    {
      id: 7,
      imageUrl: "https://media.vandal.net/m/181/metal-gear-solid-201961220192328_1.jpg",
      imageUrl2:
        "https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv97uLN4Wc6rkTRZE4X18SPIzEZSnLuzUfr8VFvBixlMlEpuvnAtuPe81KzFasoGQuea__gqWdAObHbz0JivxfoUqY5Rig9s8Lmgm2gX2c7W4mS7T1vrDh7VyZE_jXZi67S7oftKobU1g7lF1u46reysReaFtuQ/240.jpg",
    },
    {
      id: 8,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEL3-kW5lKpivJv2Z3K2d6-hofSMGSaM0gba801-CF1w&s",
      imageUrl2:
        "https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv94lRxqjtGPYTgMnxIrzhtPluUlonAmoS_s4M02nTQ26pxWgK8oNRkQ0dqpA_EgM9oJCO617aM4aD5jccG86yxbMnF42Xw0kBeSNRhi7d-CqEhZulgv5PjoKlqU_fdnGWiuySfNY4VfyRgD2KNfyM35ei-uNiw/240.jpg",
    },
    {
      id: 9,
      imageUrl:
        "https://i.pinimg.com/736x/69/16/aa/6916aa77380a499dc7888b2ffedfb265.jpg",
      imageUrl2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISsLryqDJff04QlkB3Qvbw6qa0EsprtqnxPLPvaCRJw&s",
    },
    {
      id: 10,
      imageUrl:
        "https://www.retroplace.com/pics/ps/packshots/65975--silent-hill.png",
      imageUrl2:
        "https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv94JkB5GQv-C8h5w5MCZQRwNXFmbz80Ub3OtCcmIzHXnvgDMB9d3drf3mTVN_3MXrjCwb5o5XqjT56KRgnk4ztuzaKHR2GczPiu7GS7sEZYv25-e0AScxBoECiqLYRdqKLI97Wgo4iUA9t24wz5IaofLvv4oig/240.jpg",
    },
    {
      id: 11,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzXt7x-UhowbvdGKrK0i4fsCKdc4ZMTP-wM2FYPb2Og&s",
      imageUrl2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpg8DOsjBkME-txpjWqyLM-xCfplWjXHPRfYkKjPbdTg&s",
    },
    {
      id: 12,
      imageUrl:
        "https://media.vandal.net/m/184/street-fighter-alpha-3-201961220163526_1.jpg",
      imageUrl2:
        "https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv94GWm5bjgpqeqBuy6TiLFp8SCNELT9ObpmaLRLJzRvHAsLVnmceK6rSlAHcxoWMZMXReOQjiPl2osu-YNLahcgaY9hX_LSs5Lw911JBiYl-8WwSlue745vm1rr4ePr8wovPPMgDVHloYht8odCufrI9LLpe6Q/240.jpg",
    },
    {
      id: 13,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZs4v7GQf2y0sEqK2HFuCzgeOA25T5N99jtyMdscU_Q&s",
      imageUrl2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwIZszM_3K4WLq8Pu659u7-SfcPMfv458kyINHD4_5Q&s",
    },
    {
      id: 14,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gZTBZS3b9HHW7royqi1h_MurToclVVHbDRPPYzHuxA&s",
      imageUrl2:
        "https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv95m2l5BWHSGHijeCyL9geA7q7e_d-pVNvL4esefmhj4CqdPSzCWrGZ2GjO5MpkQ6Ypj-1Yrl-R478V3AcglKx7XJWekOYeAFiFWmvKEbMnY-KQ0sDyZfOm97jXHjO6rAWUt1igAtNQXV3Xzg4RA9P7AzLhhqA/240.jpg",
    },
    {
      id: 15,
      imageUrl:
      "https://i.ebayimg.com/images/g/1bgAAOxyQ45Q90RL/s-l640.jpg",
      imageUrl2:
      "https://commondatastorage.googleapis.com/images.pricecharting.com/AMIfv95PD79QKrd_DqvGHOhwf76FdkS2nrBHP41j2Kk8qGKXGGqiTTBIKlkunsF-XWqGe6OVBjNwsAIIaqaaRUwIjPcw1CDOBM2dXucmx9mgf0xlcVuQycY2oSyxh8TDw4DMddwCRlnjCHd1BjfAK-fqCwkCl0xhBA/240.jpg"
    },
    {
      id: 16,
      imageUrl:
      "https://cdromance.org/wp-content/uploads/2016/04/iss-pro-evolution-usa-coverart.jpg",
      imageUrl2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn12j7BNtkUSn2hWmRjSIS5MUsa9g91IklbNbmyd9EyA&s"
    },
    {
      id: 17,
      imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqAEM6-fd8qw7hrOE9he_KccP4j5pE1t3WpfShwUyFQ&s",
      imageUrl2:
      "https://i.ebayimg.com/thumbs/images/g/eAcAAOSw9wxlu54s/s-l640.jpg"
    },
    // Añade más objetos aquí para más tarjetas
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === cards.length - 1) {
        return 0; // Reiniciar el índice a 0 cuando llegue al final del array
      } else {
        return prevIndex + 1; // Incrementar el índice normalmente
      }
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  const handleCardClick = (index) => {
    console.log(`Clicked card ${index + 1}`);
    // Aquí puedes realizar cualquier acción que desees al hacer clic en una tarjeta
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 160}px)` }}
      >
        {cards.map((card, index) => (
          <div
            className={`card ${index === currentIndex ? "active" : ""}`}
            key={index}
          >
            <div className="card-content">
              <img src={card.imageUrl} alt={`Card ${card.id}`} />
              <button
                className="buttonInsideCard"
                onClick={() => handleCardClick(index)}
                style={{ backgroundImage: `url(${card.imageUrl2})` }}
              >
                <span class="holeCd"></span>
              </button>
            </div>
          </div>
        ))}

      </div>
      <div className="buttonBox">
        <button className="prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
