/*
 * This program is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License, version 2.1 as published by the Free Software
 * Foundation.
 *
 * You should have received a copy of the GNU Lesser General Public License along with this
 * program; if not, you can obtain a copy at http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
 * or from the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 *
 *
 * Copyright 2002 - 2017 Pentaho Corporation. All rights reserved.
 */

package org.pentaho.osgi.notification.api.match;

import org.pentaho.osgi.notification.api.MatchCondition;

import java.util.List;

/**
 * Created by bryan on 9/22/14.
 */
public class AndCondition implements MatchCondition {
  private final List<MatchCondition> delegates;

  public AndCondition( List<MatchCondition> delegates ) {
    this.delegates = delegates;
  }

  @Override public boolean matches( Object object ) {
    for ( MatchCondition delegate : delegates ) {
      if ( !delegate.matches( object ) ) {
        return false;
      }
    }
    return true;
  }
}
